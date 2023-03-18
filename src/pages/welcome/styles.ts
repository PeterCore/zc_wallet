import styled from 'styled-components/native';
interface Props {
  width: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  margin: 10px;
  margin-right: 15px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
`;
export const PagerItem = styled.Image`
  align-self: center;
  background-color: #000;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  align-items: center;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
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
  border-width: 2px;
  border-color: blue;
  height: 44px;
  background-color: blue;
`;
