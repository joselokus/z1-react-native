import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/utils/RootNavigation';
import CategoryList from './src/components/CategoryList';
import ArticleDetails from './src/components/ArticleDetails';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="CategoryList" component={CategoryList} options={{headerShown: false }} />
          <Stack.Screen name="ArticleDetails" component={ArticleDetails} options={{headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
AppRegistry.registerComponent('MyApplication', () => App);
