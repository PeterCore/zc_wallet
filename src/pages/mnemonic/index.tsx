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
  SubTitleLabel,
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
      <SubTitleLabel>
        以下是钱包的助记词，抄写下来并导出至安全的地方存放。一旦丢失，无法找回。
      </SubTitleLabel>
      <MnemonicContainer>
        {mnemonicList.length > 0
          ? mnemonicList.map((item, index) => (
              <StyledShadowView>
                <Item>{`${index + 1}.${item}`}</Item>
              </StyledShadowView>
            ))
          : null}
      </MnemonicContainer>
      <Button onPress={() => {}}>
        <Description>助记词已抄好</Description>
      </Button>
    </Container>
  );
};
export default MnemonicScreen;
