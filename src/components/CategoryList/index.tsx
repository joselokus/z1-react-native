import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  FlatList
} from 'react-native';
import {Container, Title} from './styles';
import { CardType, CategoryType } from '../Card/types';
import Card from '../Card';
import Menu from '../Menu';
import { useQuery } from '@apollo/client';
import { FETCH_ITEMS } from '../../graphql/querys';
import WaitSpinner from '../WaitSpinner';

export default () => {
  const [categorySelected, setcategorySelected] = useState('All');
  const { data, error, loading } = useQuery(
    FETCH_ITEMS,
  );
  if (!data) return null;
  if (error) {
    console.error(error);
    return <Text>Error</Text>;
  }
  if (loading) {
    return <WaitSpinner />;
  }

  const categoryAll: CategoryType = {id: '0' , title: 'All'};
  const categoryFav: CategoryType = {id: '1' , title: 'Favourites ♡'};
  const filteredItems: CategoryType[] = [];
  filteredItems.push(categoryAll, categoryFav);
  data.items.forEach((obj: CardType) => {
    if(filteredItems.indexOf(obj.category) === -1) filteredItems.push(obj.category);
  })

  const filteredArticles: CardType[] = data.items;
  
  function categorySelectedHandler(childCategorySelected : CategoryType) {
    setcategorySelected(childCategorySelected.title);
  }

  return (
    <Container>
      <SafeAreaView>
          <Title>Learn</Title>
          <FlatList
            horizontal
            data={filteredItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Menu item={item} title={item.title} categorySelected={categorySelected} categorySelectedHandler={categorySelectedHandler}/>}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={filteredArticles}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Card item={item} category={categorySelected}/>}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
          />
      </SafeAreaView>
    </Container>
  );
};