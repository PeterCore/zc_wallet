import Tag from '@/compenonts/tag';
import {MnemonicItem, ParamMnemonic} from '@/model';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {
  AlterLabel,
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
  const [selectedMnemonics, SetSelectedMnemonics] = useState<string[]>([]);
  const [mnemonics, SetMnemonics] = useState<MnemonicItem[]>([]);
  const [vaild, SetVaild] = useState(true);
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

  const checkMnemonicVaild = (selecteds: string[]) => {
    var _vaild: boolean = false;
    const mnemonicList = mnemonic.split(' ');
    var index = selecteds.length - 1;
    if (mnemonicList[index] === selecteds[index]) {
      _vaild = true;
    }
    return _vaild;
  };

  return (
    <Container>
      <SubTitleLabel>
        以下是钱包的助记词，抄写下来并导出至安全的地方存放。一旦丢失，无法找回。
      </SubTitleLabel>
      <MnemonicSelectedContainer>
        {selectedMnemonics.length > 0
          ? selectedMnemonics.map((item, index) => (
              <Tag
                key={`${item}+${index}`}
                title={`${item}`}
                index={index}
                enable={true}
                onClick={value => {
                  console.log(`selected is ${value}`);
                  const newSelecteds = selectedMnemonics.filter(
                    filterItem => filterItem !== value,
                  );
                  console.log(`newSelecteds is ${newSelecteds}`);
                  SetVaild(checkMnemonicVaild(newSelecteds));
                  SetSelectedMnemonics(newSelecteds);
                  mnemonics.forEach(queryItem => {
                    if (queryItem.word === value) {
                      queryItem.selected = false;
                    }
                  });
                }}
              />
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
                    var currentSelected: string[] = [];
                    Object.assign(currentSelected, selectedMnemonics);
                    currentSelected.push(item.word);
                    SetVaild(checkMnemonicVaild(currentSelected));
                    SetSelectedMnemonics(currentSelected);
                  }
                }}
              />
            ))
          : null}
      </MnemonicContainer>
      {vaild !== true ? <AlterLabel>助记词顺序错误</AlterLabel> : null}
      <Button
        disabled={false}
        active={false}
        onPress={() => Alert.alert('Right button pressed')}
      />
    </Container>
  );
};

export default BackupMnemonicsScreen;
