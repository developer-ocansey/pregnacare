import {Box, List, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AsyncStorage, ScrollView} from 'react-native';
import {Header} from '../../components/Header';
import {strings} from '../../language/i18n';

export function Category({route, navigation}: any) {
  const {id, name} = route.params;
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });
  let data_: any;
  data_ = strings('Content.' + id, {
    locale: language,
    // @ts-ignore
  }).map(function (
    data: {
      name:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
      content: any;
      video: any;
      image: any;
    },
    index: number,
  ) {
    return (
      <List.Item
        zIndex={index}
        onPress={() =>
          navigation.navigate('ViewData', {
            title: data.name,
            description: data.content,
            video: data.video,
            image: data.image,
            category: id,
          })
        }>
        <Text>{data.name}</Text>
      </List.Item>
    );
  });
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Header name={name} navigation={navigation} />
      <Box>
        <ScrollView>{data_}</ScrollView>
      </Box>
    </Box>
  );
}
