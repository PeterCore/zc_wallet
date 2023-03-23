import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';

const BackButton = (props: StackHeaderLeftButtonProps) => {
  const navigation = useNavigation();
  return (
    <Ionicons.Button
      name="arrow-back"
      onPress={() => navigation.goBack()}
      backgroundColor="transparent"
      color="#000"
      size={30}
    />
  );
};

export default BackButton;
