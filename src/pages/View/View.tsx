import {Box, Center, ScrollView, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AsyncStorage, Linking, StyleSheet} from 'react-native';
// @ts-ignore
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import {Header} from '../../components/Header';
import {strings} from '../../language/i18n';

// @ts-ignore
export function View_({route, navigation}: any) {
  const [language, setLanguage] = useState('en');
  const {video, title, image, description} = route.params;

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Header name={title} navigation={navigation} />
      <Box>
        <Box style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <ScrollView style={styles.view}>
            <SwipeableParallaxCarousel
              data={image}
              titleColor={'#FFF'}
              parallax={true}
              navigation={true}
            />

            <Text style={styles.description}>{description}</Text>
          </ScrollView>
          <Text style={styles.videoLnk}>Videos Links</Text>
          {video === undefined ? (
            <Center>
              <Text>No Videos</Text>
            </Center>
          ) : (
            <Text
              style={styles.videoBtn}
              onPress={() => {
                Linking.openURL(video[0]);
              }}>
              {strings('Videos.link0', {locale: language})}
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  header: {padding: 20, marginBottom: 5},
  title: {textAlign: 'left', fontWeight: 'bold'},
  view: {marginTop: 10, marginBottom: 20},
  videoBtn: {
    backgroundColor: '#0094DF',
    padding: 7,
    borderRadius: 4,
    color: '#FFF',
    textAlign: 'center',
  },
  videoLnk: {textAlign: 'left', fontWeight: 'bold', marginBottom: 20},
  description: {
    textAlign: 'left',
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },
});
