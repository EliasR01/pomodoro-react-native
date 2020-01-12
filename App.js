import React from 'react';
import { ScrollView } from 'react-native';
import PomodoroCounter from './src/containers/pomodoroCounter';

function App() {
  return (
    <ScrollView>
      <PomodoroCounter />
    </ScrollView>
  );
}

export default App;
