import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

const CounterConfig = props => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      margin: 'auto',
      justifyContent: 'space-between',
      width: '100%'
    },
    text: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: '20%'
    },
    button: {
      margin: 'auto',
      display: 'flex',
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pomodoro Counter</Text>
      <View style={styles.button}>
        <Button
          title='Break time!'
          onPress={() => props.changeTimer('Break')}
        />
        <Button
          title='Pomodoro'
          onPress={() => props.changeTimer('Pomodoro')}
        />
      </View>
    </SafeAreaView>
  );
};

export default CounterConfig;
