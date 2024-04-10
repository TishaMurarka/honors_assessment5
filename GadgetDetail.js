
import React from 'react';
import { View, Text } from 'react-native';

const GadgetDetail = ({ name, type }) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Type: {type}</Text>
    </View>
  );
}

export default GadgetDetail;