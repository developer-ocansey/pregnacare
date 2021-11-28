import {CommonActions} from '@react-navigation/native';
import {Box, List, ScrollView, Select, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {Alert, AsyncStorage, StyleSheet} from 'react-native';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {strings} from '../../language/i18n';

export function Settings({navigation}: any) {
  const [language, setLanguage] = useState('en');
  const [selected, setSelected] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
      setSelected(lang || 'en');
    });
  });

  const onValueChange = (value: string) => {
    Alert.alert(
      'Application Language',
      'Dou you want to change language',
      [
        {
          text: 'NO',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            setSelected(value);
            AsyncStorage.setItem('@language:key', value);
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Index'}],
              }),
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  const appversion = () => {
    Alert.alert('Sweet Mother', 'Version 1.1');
  };

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Header
        navigation={null}
        name={strings('Settings.title', {locale: language})}
      />
      <ScrollView style={styles.ctn}>
        <Box>
          <List>
            <List.Item>
              <Select
                minWidth="200"
                accessibilityLabel="App Language"
                placeholder="App Language"
                style={styles.select}
                selectedValue={selected}
                onValueChange={val => onValueChange(val)}>
                <Select.Item label="English Language" value="en" />
                <Select.Item label="Pidgin" value="pidgin" />
                <Select.Item label="Yoruba Language" value="yoruba" />
                <Select.Item label="Igbo Language" value="igbo" />
                <Select.Item label="Hausa Language" value="hausa" />
              </Select>
            </List.Item>
            <List.Item onPress={() => appversion()}>
              <Text>{strings('Settings.list_3', {locale: language})}</Text>
            </List.Item>
          </List>
        </Box>
      </ScrollView>
      <Footer navigation={navigation} />
    </Box>
  );
}

const styles = StyleSheet.create({
  select: {padding: 10, marginLeft: -9},
  ctn: {paddingTop: 30, margin: 12, height: '50%'},
  txt: {color: '#000000', fontSize: 18},
});
