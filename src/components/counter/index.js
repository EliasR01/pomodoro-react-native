import React from 'react';
import { StyleSheet, View, Text, Button, SafeAreaView } from 'react-native';

const Counter = props => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      width: '100%'
    },
    text: {
      fontSize: 25,
      textAlign: 'center'
    },
    button: {
      margin: 'auto',
      marginTop: 10,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'row'
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{`${props.minutes}:${
        props.seconds < 10 ? '0' + props.seconds : props.seconds
      }`}</Text>
      <View style={styles.button}>
        <Button title='Start count!' onPress={props.start} />
        <Button title='Stop count!' onPress={props.stop} />
        <Button title='Reset count!' onPress={props.reset} />
      </View>
    </SafeAreaView>
  );
};

export default Counter;
