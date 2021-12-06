import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryList from './src/components/CategoryList';
import ArticleDetails from './src/components/ArticleDetails';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache()
});

function CategoryListScreen({ navigation }) {
  return (
    <ApolloProvider client={client}>
      <CategoryList navigation={navigation}/>
    </ApolloProvider>
  );
}

function ArticleDetailsScreen({ navigation, route }) {
  return (
    <ArticleDetails navigation={navigation} route={route}/>
 );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="CategoryList" component={CategoryListScreen} options={{headerShown: false }} />
          <Stack.Screen name="ArticleDetails" component={ArticleDetailsScreen} options={{headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}

AppRegistry.registerComponent('MyApplication', () => App);
