import {checkPassword, generateMnemonic} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {
  Container,
  CreateWalletButton,
  Description,
  Input,
  InputLabel,
  InputWrapper,
  PasswordVaildLabel,
  SubTitleLabel,
} from './styles';

const CreateWalletScreen = () => {
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [validpassword, setVaildPassword] = useState(false);
  const [confirmVaild, setConfirmVaild] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const checkPasswordVaild = (password: string) => {
    const vaild: boolean = checkPassword(password);
    setPasswordValue(password);
    setVaildPassword(vaild);
    var confirm: boolean = password === confirmPasswordValue ? true : false;
    setConfirmVaild(confirm && validpassword);
  };

  const confirmPassword = (password: string) => {
    setConfirmPasswordValue(password);
    var confirm: boolean = password === passwordValue ? true : false;
    setConfirmVaild(confirm && validpassword);
  };

  const navigationMnemonicScreen = async () => {
    if (confirmVaild !== true) {
      return;
    }
    setIsLoading(true);
    const mnemonic = generateMnemonic();
    if (mnemonic) {
      setIsLoading(false);
      navigation.navigate(
        'Mnemonic' as never,
        {mnemonic: mnemonic, password: passwordValue} as never,
      );
    }
  };

  return (
    <Container>
      <Spinner
        visible={isLoading}
        textContent={'Loading...'}
        textStyle={{color: '#FFF'}}
      />
      <SubTitleLabel>
        密码仅能解锁当前软件，且只保存在本手机设备上
      </SubTitleLabel>
      <InputWrapper>
        <InputLabel>设置密码:</InputLabel>
        <Input
          secureTextEntry={true}
          value={passwordValue}
          onChangeText={checkPasswordVaild}
          placeholder="至少8位"
          selectionColor="#333333"
        />
      </InputWrapper>
      <PasswordVaildLabel active={validpassword}>
        至少8位字符（包括大小写字母和数字）
      </PasswordVaildLabel>
      <InputWrapper>
        <InputLabel>确认密码:</InputLabel>
        <Input
          secureTextEntry={true}
          value={confirmPasswordValue}
          onChangeText={confirmPassword}
          placeholder="重复密码"
          selectionColor="#333333"
        />
      </InputWrapper>
      <CreateWalletButton
        active={confirmVaild}
        onPress={navigationMnemonicScreen}
      >
        <Description>创建钱包</Description>
      </CreateWalletButton>
    </Container>
  );
};

export default CreateWalletScreen;
