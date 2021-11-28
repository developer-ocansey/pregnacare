import {Box, Button, HStack, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import {strings} from '../language/i18n';

export function Footer({navigation}: any) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });

  return (
    <Box style={styles.box}>
      <HStack style={styles.bgColor}>
        <Button
          onPress={() => navigation.navigate('Index')}
          style={styles.btnStyle}>
          <Text style={styles.btnTxt}>
            {strings('Home.footer_menu_home', {locale: language})}
          </Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('About')}
          style={styles.btnStyle}>
          <Text style={styles.btnTxt}>
            {' '}
            {strings('Home.footer_menu_about', {locale: language})}
          </Text>
        </Button>
        <Button
          onPress={() => navigation.navigate('Settings')}
          style={styles.btnStyle}>
          <Text style={styles.btnTxt}>
            {' '}
            {strings('Home.footer_menu_settings', {locale: language})}
          </Text>
        </Button>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  box: {borderTopWidth: 1, borderTopColor: '#EBEBEB'},
  bgColor: {backgroundColor: '#FFF'},
  btnStyle: {width: '33.33%', backgroundColor: '#FFF'},
  btnTxt: {color: '#0094DF', padding: 10},
});
