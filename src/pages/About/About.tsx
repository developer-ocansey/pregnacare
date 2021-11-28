import {Box, ScrollView, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import {Footer} from '../../components/Footer';
import {Header} from '../../components/Header';
import {strings} from '../../language/i18n';

// @ts-ignore
export function About({navigation}: any) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Header
        navigation={null}
        name={strings('About.title', {locale: language})}
      />
      <ScrollView style={styles.ctn}>
        <Text style={styles.txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </Text>
      </ScrollView>
      <Footer navigation={navigation} />
    </Box>
  );
}

const styles = StyleSheet.create({
  ctn: {paddingTop: 30, margin: 12, height: '50%'},
  txt: {color: '#000000', fontSize: 18},
});
