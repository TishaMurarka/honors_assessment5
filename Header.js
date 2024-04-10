// import { Text, View } from "react-native";

// const Header =(props)=>{
//     const {textStyling,viewStyle} = styles;
//     return(
//         <View style={viewStyle}>
//             <Text style={textStyling}>{props.title}</Text>
//         </View>
//     )
// }

// const styles ={
//     textStyling : {
//         fontSize : 25
//     },
//     viewStyle :{
//         backgroundColor : 'pink',
//         height : 70,
//         paddingTop : 20,
//         justifyContent : 'center',
//         alignItem : 'center'
//     }
// }
// export default Header

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>This is the header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;