import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import { colors, fontSizes } from "../configurations/constants";
import { BluetoothManager,BluetoothEscposPrinter } from "react-native-bluetooth-escpos-printer";
import { icons } from "../configurations/icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-community/async-storage";
import * as NavActions from "../navigations/NavActions";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utility/appUtils";
import { clearOrderDetailAction } from "../redux/actions/orderActions";

const Printer = ({isVisible,onClose,shopData,workPlaceData,dateTime}) => {

  let cancelSubscriptions = false;
  const SUCCESS_MSG = 'SUCCESS';

  const [bluetoothStatus,setBluetoothStatus] = useState(null);
  const [printerStatus,setPrinterStatus] = useState(null);
  const [printers,setPrinters] = useState([]);

  const dispatch = useDispatch();
  const orderDetailsSuccess = useSelector(state => state.orderState.orderDetailsSuccess);
  const paymentHistorySuccess = useSelector(state => state.orderState.paymentHistorySuccess);

  const loadPrinters = async() => {
    let list = await AsyncStorage.getItem('printers');
    if (list && JSON.parse(list).length) {
      list = JSON.parse(list);
      if (!cancelSubscriptions) setPrinters(list);
    } else {
      if (!cancelSubscriptions) setBluetoothStatus('You don\'t have any printers added. Please check the settings!');
    }
  }

  useEffect(()=>{
    if (isVisible) {
      setBluetoothStatus(null);
      loadPrinters();
    }
    return ()=>{
      cancelSubscriptions = true;
    }
  },[isVisible])

  useEffect(()=>{
    if (!cancelSubscriptions) {
      setPrinterStatus('Searching...')
    }
    if (isVisible && printers.length && orderDetailsSuccess && orderDetailsSuccess.result && paymentHistorySuccess) {

      if (printers.filter(printer=>!printer.address).length) {
        if (!cancelSubscriptions) setBluetoothStatus('Your printer not paired or not synced correctly.Please check the settings!');
      } else {
        manageBluetooth();
      }
    }
  },[isVisible,printers,orderDetailsSuccess,paymentHistorySuccess])

  const manageBluetooth = () => {
    BluetoothManager.isBluetoothEnabled().then((enabled)=> {
      if (!enabled) {
        enableBluetooth();
      } else {
        connectWithPrinter(printers[0].address);
      }
    }, (err)=> {
      if (!cancelSubscriptions) setBluetoothStatus('Please check your mobile device bluetooth connectivity!');
    });
  }

  const enableBluetooth = () => {
    BluetoothManager.enableBluetooth().then((r)=>{
      if (!cancelSubscriptions) setPrinterStatus('Printer Connecting...');
      connectWithPrinter(printers[0].address);
    },(err)=>{
      if (!cancelSubscriptions) setBluetoothStatus('Please enable the mobile device bluetooth to connect with printer!');
    });
  }

  const connectWithPrinter = (address) => {
    if (!cancelSubscriptions) setPrinterStatus('Printer Connecting...');
    BluetoothManager.connect(address)
      .then((s)=>{
        if (!cancelSubscriptions) setPrinterStatus('Printing...');
        printData();
      },(e)=>{
        if (!cancelSubscriptions) setBluetoothStatus('Unable to connect! Please check the printer bluetooth connectivity.');
      })
  }

  const printData = async () => {

    //workplace details
    await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.LEFT);
    await  BluetoothEscposPrinter.printText("DISTRIBUTOR : \n\r",{
      encoding:'GBK',
      codepage: 0,
      widthtimes:1,
      heigthtimes:0,
      fonttype:2
    });

    await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
    await  BluetoothEscposPrinter.printText(workPlaceData.name + "\n\r",{
      encoding:'GBK',
      codepage: 0,
      widthtimes:1,
      heigthtimes:0,
      fonttype:2
    });
    await  BluetoothEscposPrinter.printText(workPlaceData.address + "\n\r",{});
    await  BluetoothEscposPrinter.printText(workPlaceData.mobileNumber + "\n\r",{});

    await  BluetoothEscposPrinter.printText("\n\r",{});

    //customer details
    await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.LEFT);
    await  BluetoothEscposPrinter.printText("CUSTOMER : \n\r",{});

    await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
    await  BluetoothEscposPrinter.printText(shopData.name + "\n\r",{});
    await  BluetoothEscposPrinter.printText(shopData.address + "\n\r",{});
    await  BluetoothEscposPrinter.printText(shopData.mobileNumber + "\n\r",{});

    //invoice details
    await  BluetoothEscposPrinter.printText("\n\r",{});
    await BluetoothEscposPrinter.printColumn([22.5,22.5],
      [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.RIGHT],
      [("INVOICE NO - " + shopData.ref),dateTime],{})

    await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
    await  BluetoothEscposPrinter.printText('Payment Method : ' + (shopData.paymentStatus ? shopData.paymentStatus : 'N/A')+"\n\r",{});

    await  BluetoothEscposPrinter.printText("-----------------------------------------------\n\r",{});
    await  BluetoothEscposPrinter.printText("\n\r",{});
    await  BluetoothEscposPrinter.printText("\n\r",{});

    await BluetoothEscposPrinter.printColumn([17,7,21],
      [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.LEFT],
      ["Item Name",'Qty', 'Price'],{
        codepage: 0,
        widthtimes:1,
        heigthtimes:0,
        fonttype: 1
      });

    await BluetoothEscposPrinter.printText("\n\r",{});

    const itemDetails = orderDetailsSuccess.result.map(detail=>{
      return({
        price: formatPrice(detail.price),
        name: detail.itemName,
        qty: (detail.qty+(detail.uom === 'Pieces' ? 'PCS' : detail.uom)),
        subTotal: formatPrice(parseFloat(detail.qty) * parseFloat(detail.price))
      })
    });

    let paymentHistory = [];
    if (paymentHistorySuccess && paymentHistorySuccess.result && paymentHistorySuccess.result.length) {
      paymentHistory = paymentHistorySuccess.result.map(history=>{
        return({
          payment: formatPrice(history.paymentData),
          dateTime: history.dateTime
        })
      });
    }

    //item details print here

    for (let detail of itemDetails) {
      await BluetoothEscposPrinter.printColumn([25,8,12],
        [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
        [detail.name,detail.qty,detail.price],{});

      await BluetoothEscposPrinter.printColumn([8,25,12],
        [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
        ['-------------- ',('('+detail.price + ' X ' + detail.qty+')'),detail.subTotal],{});
    }

    await  BluetoothEscposPrinter.printText("\n\r",{});
    await  BluetoothEscposPrinter.printText("-----------------------------------------------\n\r",{});

    //total here
    await BluetoothEscposPrinter.printColumn([16,5,24],
      [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.LEFT],
      ["Total",'          ', shopData.total],{
        codepage: 0,
        widthtimes:1,
        heigthtimes:0,
        fonttype: 1
      });

    //payment history
    if (paymentHistory && paymentHistory.length) {
      await  BluetoothEscposPrinter.printText("-----------------------------------------------",{});
      await  BluetoothEscposPrinter.printText("Payment History\n\r",{
        codepage: 0,
        widthtimes:1,
        heigthtimes:0,
        fonttype: 1}
      );
      await  BluetoothEscposPrinter.printText("\n\r",{});

      for (let history of paymentHistory) {
        await BluetoothEscposPrinter.printColumn([25,8,12],
          [BluetoothEscposPrinter.ALIGN.LEFT,BluetoothEscposPrinter.ALIGN.CENTER,BluetoothEscposPrinter.ALIGN.RIGHT],
          [history.dateTime, ' ',history.payment],{});
      }

      await  BluetoothEscposPrinter.printText("-----------------------------------------------\n\r",{});
      await  BluetoothEscposPrinter.printText("\n\r",{});
    }

    //powered by footer
    await  BluetoothEscposPrinter.printText("POWERED BY SENTURA TECHNOLOGIES\n\r",{});
    await  BluetoothEscposPrinter.printText("Tel: 0766234152 / 0774954012\n\r",{});
    await  BluetoothEscposPrinter.printText("\n\r",{});
    await  BluetoothEscposPrinter.printText("\n\r",{});

    if (!cancelSubscriptions) {
      resetStatuses();
    }
    onClose();
  }

  const resetStatuses = () => {
    setPrinterStatus(null);
    setBluetoothStatus(null);
  }

  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <Modal
        backdropColor={colors.white}
        backdropOpacity={1}
        onBackdropPress={()=>{}}
        isVisible={isVisible}
      >
        {
          bluetoothStatus && bluetoothStatus !== SUCCESS_MSG ?
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <FontAwesomeIcon color={colors.red} size={50} icon={icons.WARNING} />
              <Text style={{marginTop: '10%',fontSize: fontSizes.fontXLarge,textAlign: 'center'}}>{bluetoothStatus}</Text>
              <TouchableOpacity
                onPress={()=> {
                  if (bluetoothStatus && bluetoothStatus.includes('settings')) {
                    onClose();
                    dispatch(clearOrderDetailAction());
                    NavActions.navigate('Printer Settings');
                  } else {
                    resetStatuses();
                    onClose();
                  }
                }}
                style={{marginTop: '20%'}}>
                <Text style={{color: colors.darkBlue,fontSize: fontSizes.fontMediumPlus}}>{bluetoothStatus && bluetoothStatus.includes('settings') ? 'Go to Settings' : 'OK'}</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
              <ActivityIndicator size={"large"} color={colors.darkBlue} />
              <Text style={{marginTop: '10%',fontSize: fontSizes.fontXLarge,textAlign: 'center'}}>{printerStatus}</Text>
              <TouchableOpacity
                onPress={()=>{
                  onClose();
                  resetStatuses();
                }}
                style={{marginTop: '20%'}}>
                <Text style={{color: colors.darkGray}}>CANCEL</Text>
              </TouchableOpacity>
            </View>
        }

      </Modal>
    </View>
  )
}

export default Printer;
