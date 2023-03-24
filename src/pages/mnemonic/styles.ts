import styled from 'styled-components/native';
import DropShadow from 'react-native-drop-shadow';

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

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;
export const MnemonicContainer = styled.View`
  flex-direction: column;
  padding: 20px;
  background-color: #ededed;
  border-radius: 6px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.Text`
  background-color: white;
  border-radius: 6px;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  margin: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 4px;
`;

export const SubTitleLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #ddd;
  max-lines: 2;
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
export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
  align-items: center;
  font-weight: bold;
`;
