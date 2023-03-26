import ParamMnemonic from '@/model';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {
  Button,
  Container,
  Description,
  Item,
  MnemonicContainer,
  StyledShadowView,
  SubTitleLabel,
} from './styles';

const MnemonicScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamMnemonic, 'Param'>>();
  const mnemonic = route.params.mnemonic;
  const password = route.params.password;
  const mnemonicList: Array<string> = mnemonic.split(' ');
  console.log(password);
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
      <Button
        onPress={() => {
          navigation.navigate(
            'Backup' as never,
            {mnemonic: mnemonic, password: password} as never,
          );
        }}
      >
        <Description>助记词已抄好</Description>
      </Button>
    </Container>
  );
};
export default MnemonicScreen;
