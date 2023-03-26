import {MnemonicItem, ParamMnemonic} from '@/model';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Container,
  Description,
  Item,
  MnemonicContainer,
  StyledShadowView,
  SubTitleLabel,
} from './styles';

const BackupMnemonicsScreen = () => {
  const route = useRoute<RouteProp<ParamMnemonic, 'Param'>>();
  const [selectedMnemonics, SetSelectedMnemonics] = useState<MnemonicItem[]>(
    [],
  );
  const [mnemonics, SetMnemonics] = useState<MnemonicItem[]>([]);
  const password = route.params.password;
  const mnemonic = route.params.mnemonic;
  useEffect(() => {
    const mnemonicList = mnemonic.split(' ');
    const sort_mnemonics = shuffleArray(mnemonicList);
    const sort_mnemonics_l: MnemonicItem[] = [];
    sort_mnemonics.forEach(item => {
      const me = {word: item, selected: false};
      sort_mnemonics_l.push(me);
    });
    SetMnemonics(sort_mnemonics_l);
  }, [mnemonic]);

  const shuffleArray = (array: string[]) => {
    if (array.length <= 1) return array;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Container>
      <SubTitleLabel>
        以下是钱包的助记词，抄写下来并导出至安全的地方存放。一旦丢失，无法找回。
      </SubTitleLabel>
      <MnemonicContainer>
        {mnemonics.length > 0
          ? mnemonics.map((item, index) => (
              <StyledShadowView key={index}>
                <Item>{`${item.word}`}</Item>
              </StyledShadowView>
            ))
          : null}
      </MnemonicContainer>
    </Container>
  );
};

export default BackupMnemonicsScreen;
