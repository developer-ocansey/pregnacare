import {Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AsyncStorage, StatusBar, StyleSheet, View} from 'react-native';
import {strings} from '../language/i18n';

export function Header({name, navigation}: any) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });

  return (
    <React.Fragment>
      <StatusBar
        translucent
        backgroundColor="#FFF"
        barStyle="dark-content"
        animated
      />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{name}</Text>
        {navigation && (
          <Text style={styles.back} onPress={() => navigation.goBack()}>
            {strings('Home.back', {locale: language})}
          </Text>
        )}
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {fontSize: 12, color: '#000000', textTransform: 'uppercase'},
  headerTxt: {
    width: '70%',
    color: 'grey',
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
