import Tag from '@/compenonts/tag';
import {MnemonicItem, ParamMnemonic} from '@/model';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  Button,
  Container,
  Description,
  Item,
  MnemonicContainer,
  MnemonicSelectedContainer,
  StyledShadowView,
  SubTitleLabel,
} from './styles';

const BackupMnemonicsScreen = () => {
  const route = useRoute<RouteProp<ParamMnemonic, 'Param'>>();
  const [selectedMnemonics, SetSelectedMnemonics] = useState<String[]>([]);
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
    if (array.length <= 1) {
      return array;
    }
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
      <MnemonicSelectedContainer>
        {selectedMnemonics.length > 0
          ? selectedMnemonics.map((item, index) => (
              <StyledShadowView>
                <Item>{`${item}`}</Item>
              </StyledShadowView>
            ))
          : null}
      </MnemonicSelectedContainer>
      <MnemonicContainer>
        {mnemonics.length > 0
          ? mnemonics.map((item, index) => (
              <Tag
                key={`${item}+${index}`}
                title={item.word}
                index={index}
                enable={!item.selected}
                onClick={value => {
                  if (item.word === value) {
                    item.selected = true;
                    console.log(mnemonics);
                    if (selectedMnemonics.length === 0) {
                      SetSelectedMnemonics([item.word]);
                    }else {
                        var currentSelected : string[]= []; 
                        Object.assign(currentSelected,selectedMnemonics);
                        currentSelected.push(item.word);
                        SetSelectedMnemonics(currentSelected);
                    }
                  }
                }}
              />
            ))
          : null}
      </MnemonicContainer>
      {/* <BackupButton title="sadad" onPress={() => {}} /> */}
      <Button
        disabled={false}
        active={false}
        onPress={() => Alert.alert('Right button pressed')}
      />
    </Container>
  );
};

export default BackupMnemonicsScreen;
