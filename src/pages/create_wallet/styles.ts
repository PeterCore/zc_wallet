import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

interface Props {
  top: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ArrowStyledIcon = styled(Icon)`
  margin-left: 15px;
  font-size: 25px;
`;

export const ReturnBackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: ${getStatusBarHeight()};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
