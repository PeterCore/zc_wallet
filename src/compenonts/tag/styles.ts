import styled from 'styled-components/native';
import DropShadow from 'react-native-drop-shadow';

export interface Props {
  title?: string;
  enable: boolean;
  index?: number;
  onClick?: (title: string) => void;
}

export const StyledShadowView = styled(DropShadow)(() => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 2,
}));

export const Item = styled.Text`
  background-color: ${(props: Props) =>
    props.enable === true ? '#fff' : '#e8e8e8'};
  border-radius: 6px;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props: Props) => (props.enable === true ? '#666' : '#999')};
`;
export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1.0,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 28px;
  margin: 5px;
`;
