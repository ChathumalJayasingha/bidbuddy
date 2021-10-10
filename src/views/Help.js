import React from 'react'
import {Text,Image,View,StyleSheet} from 'react-native'
import {ExpandableListView} from 'react-native-expandable-listview';
import {constants} from '../configurations/constants'

const CONTENT = [
  {
    id: '1',
    categoryName: 'What is BidBiddy?',
    subCategory: [{id: '1', name: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}],
  },
  {
    id: '2',
    categoryName: 'How can I register?',
    subCategory: [{id: '1', name: "1. Go to bidbuddy mobile app menu"},
  ],
  },
  {
    id: '3',
    categoryName: 'How do I play the game?',
    subCategory: [{id: '1', name:'cascascascascascasc'}],
  },
  {
    id: '92',
    categoryName: 'How do I bid?',
    subCategory: [{id: '1', name: 'Sub Item 1'}],
  },
  {
    id: '96',
    categoryName: 'How to earn coin?',
    subCategory: [{id: '1', name: 'Sub Item 1'}],
  },
  
];


export default function Help() {

  function handleItemClick({index}) {
    console.log(index);
  };

  function handleInnerItemClick({innerIndex, item, itemIndex}) {
    console.log(innerIndex);
  };

  return (
        <ExpandableListView
        style={{}}
        data={CONTENT}
        onInnerItemClick={handleInnerItemClick}
        onItemClick={handleItemClick}
        ExpandableListViewStyles={{backgroundColor:'#FB6400',
        margin:20,
      
      }}
        renderInnerItemSeparator={true} 
        renderItemSeparator={true}
        itemContainerStyle={{backgroundColor:'#FB6400',margin:10,}} 
        itemLabelStyle={{backgroundColor:'red',borderRadius:20,padding:10,}} 
        customChevron={{}}
        chevronColor="blue" 
        innerItemContainerStyle={{}}
        itemLabelStyle={{color:'white',}}
        itemImageIndicatorStyle={{}}
        animated={true}
      />
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,fontWeight:'bold'
  }
})






