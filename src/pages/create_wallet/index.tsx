import React from 'react';
import {Container, ArrowStyledIcon, ReturnBackButton} from './styles';
import {useNavigation} from '@react-navigation/native';

const CreateWalletScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ReturnBackButton
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ArrowStyledIcon name="arrow-left" />
      </ReturnBackButton>
    </Container>
  );
};

export default CreateWalletScreen;
