import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {Container, Header, PagerItem, Button, Description} from './styles';
import {useNavigation} from '@react-navigation/native';
import {generateMnemonic} from '@/utils';
const WelcomeScreen = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const navigation = useNavigation();

  const guideImages = [
    require('@/assets/guide/1_u.jpeg'),
    require('@/assets/guide/2_u.jpeg'),
  ];
  return (
    <Container>
      <ViewPager
        orientation="horizontal"
        style={{
          width: width,
          height: width,
          marginTop: (height - width) / 2 - 100,
        }}
        initialPage={0}
        onPageSelected={event => {
          console.log(event.nativeEvent.position);
        }}
      >
        {guideImages.map((item, index) => (
          <PagerItem source={item} key={index} resizeMode={'cover'} />
        ))}
      </ViewPager>
      <Button
        onPress={() => {
          navigation.navigate('Create' as never, {} as never);
        }}
      >
        <Description>创建钱包</Description>
      </Button>
      <Button
        onPress={() => {
          generateMnemonic();
        }}
      >
        <Description>导入钱包</Description>
      </Button>
    </Container>
  );
};
export default WelcomeScreen;
