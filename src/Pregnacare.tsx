import {Overlay} from '@shoutem/ui';
import {Box, Text} from 'native-base';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  AsyncStorage,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {strings} from './language/i18n';

export const PregnaCare = ({navigation}: any) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AsyncStorage.getItem('@language:key').then(lang => {
      setLanguage(lang || 'en');
    });
  });

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Header
        name={strings('Home.title', {locale: language})}
        navigation={null}
      />
      <ScrollView style={styles.sctn}>
        <View>
          <View style={styles.ctn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'baby',
                  name: strings('Home.bullets_p_1', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/baby.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_1', {locale: language})}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_2', {locale: language})}
                </Text>
                <Text style={styles.innerTxt2}>
                  {strings('Home.bullets_p_3', {locale: language})}
                </Text>
                <Text style={styles.innerTxt3}>
                  {strings('Home.bullets_p_4', {locale: language})}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewStly}>
          <View style={styles.ctn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'sibiling',
                  name: strings('Home.bullets_p_5', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/sibiling.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_5', {locale: language})}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_6', {locale: language})}
                </Text>
                <Text style={styles.innerTxt2}>
                  {strings('Home.bullets_p_7', {locale: language})}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewStly}>
          <View style={styles.ciew}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'mother',
                  name: strings('Home.bullets_p_8', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/mother.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_8', {locale: language})}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_9', {locale: language})}
                </Text>
                <Text style={styles.innerTxt2}>
                  {strings('Home.bullets_p_10', {
                    locale: language,
                  })}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewStly}>
          <Box style={styles.ciew}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'spouse',
                  name: strings('Home.bullets_p_11', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/relationship.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_11', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_12', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxts}>
                  {strings('Home.bullets_p_13', {
                    locale: language,
                  })}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </Box>
        </View>
        <View style={styles.viewStly}>
          <Box style={styles.ciew}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'sex',
                  name: strings('Home.bullets_p_14', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/sex.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_14', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_15', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt2}>
                  {strings('Home.bullets_p_16', {
                    locale: language,
                  })}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </Box>
        </View>
        <View style={styles.viewStly}>
          <Box
            style={{
              backgroundColor: '#635DB7',
              height: 140,
              borderRadius: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  id: 'general_health',
                  name: strings('Home.bullets_p_17', {
                    locale: language,
                  }),
                })
              }
              style={styles.panel}>
              <ImageBackground
                imageStyle={styles.imgBackStyle}
                source={require('./assets/img/health.jpeg')}
                style={styles.imgBack}>
                <Overlay
                  styleName="fill-parent image-overlay"
                  style={styles.overlayStyle}
                />
                <Text style={styles.panelText}>
                  {strings('Home.bullets_p_17', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt}>
                  {strings('Home.bullets_p_18', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt2}>
                  {strings('Home.bullets_p_19', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt3}>
                  {strings('Home.bullets_p_20', {
                    locale: language,
                  })}
                </Text>
                <Text style={styles.innerTxt4}>
                  {strings('Home.bullets_p_21', {
                    locale: language,
                  })}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </Box>
  );
};

const styles = StyleSheet.create({
  sctn: {padding: 10},
  panel: {borderRadius: 10},
  ctn: {
    backgroundColor: '#635DB7',
    height: 140,
    borderRadius: 10,
  },
  ciew: {
    backgroundColor: '#635DB7',
    height: 140,
    borderRadius: 10,
  },
  innerTxt: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 60,
    fontWeight: 'bold',
  },
  innerTxt2: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 80,
    fontWeight: 'bold',
  },
  innerTxt3: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 100,
    fontWeight: 'bold',
  },
  innerTxt4: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 120,
    fontWeight: 'bold',
  },
  imgBack: {width: '100%', height: '100%'},
  imgBackStyle: {borderRadius: 15},
  txtHeader: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 60,
    fontWeight: 'bold',
  },
  overlayStyle: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 260,
    borderTopColor: '#000000',
    opacity: 0.5,
  },
  viewStly: {marginTop: 10},
  panelText: {
    color: '#FFF',
    position: 'absolute',
    left: 10,
    top: 20,
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
  },
});
