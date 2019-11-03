import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ErrorBoundary from './components/ErrorBoundary';
import HomeScreen from './screens/HomeScreen';

const MainNavigator = createSwitchNavigator({
  Home: HomeScreen
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => (
  <ErrorBoundary>
    <View style={styles.container}>
      <AppContainer />
    </View>
  </ErrorBoundary>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
