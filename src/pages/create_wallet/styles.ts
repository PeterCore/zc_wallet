import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {TextInput} from 'react-native';

interface Props {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const InputLabel = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #666666;
`;

export const Input = styled.TextInput`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ededed;
  padding: 5px;
`;

export const PasswordVaildLabel = styled.Text`
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0px 15px 0px;
  color: ${(props: Props) => (props.active ? '#bbdefb' : '#ededed')};
`;
export const SubTitleLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #ddd;
`;

export const CreateWalletButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  height: 44px;
  background-color: ${(props: Props) => (props.active ? '#333333' : '#ededed')};
`;
export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  align-items: center;
  font-weight: bold;
`;
