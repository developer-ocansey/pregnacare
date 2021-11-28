import * as React from 'react';
import {Pressable, View, Text} from 'react-native';

// @ts-ignore
export function PregnaCare({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to our Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Conference')}
        style={{
          backgroundColor: 'plum',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Conference</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Video')}
        style={{backgroundColor: 'plum', padding: 10}}>
        <Text>Story</Text>
      </Pressable>
    </View>
  );
}
