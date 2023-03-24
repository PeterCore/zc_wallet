import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {
  Button,
  Container,
  Description,
  Item,
  MnemonicContainer,
  StyledShadowView,
} from './styles';

type ParamMnemonic = {
  Param: {
    mnemonic: string;
  };
};

const MnemonicScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamMnemonic, 'Param'>>();
  const mnemonic = route.params.mnemonic;
  const mnemonicList: Array<string> = mnemonic.split(' ');
  console.log(mnemonic);
  useEffect(() => {}, []);

  return (
    <Container>
      <MnemonicContainer>
        {mnemonicList.length > 0
          ? mnemonicList.map((item, index) => (
              <StyledShadowView>
                <Item>{`${index + 1}.${item}`}</Item>
              </StyledShadowView>
            ))
          : null}
      </MnemonicContainer>
      <Button
        onPress={() => {
          navigation.navigate('Create' as never, {} as never);
        }}
      >
        <Description>创建钱包</Description>
      </Button>
    </Container>
  );
};
export default MnemonicScreen;
