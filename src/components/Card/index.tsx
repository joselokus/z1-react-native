
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { CardType } from '../Card/types';
import styles from './styles';

const onPressListItem = (navigation, item: CardType) => {
        navigation.navigate('ArticleDetails', { item: item });
      };

const Card = ({ item, category, navigation } : {item: CardType, category: string, navigation: () => void}) => {

  if(category === 'All'){
      return (
        <View style={styles.containerChip}>
          <View style={styles.itemAll}>
              <TouchableOpacity onPress={() => onPressListItem(navigation, item)}>
                  <Image
                      source={{
                      uri: item.image,
                      }}
                      style={styles.itemPhotoAll}
                      resizeMode="cover"
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={styles.articleText}>{item.category.title}</Text>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <Text style={styles.authorText}>{item.author}</Text>
                  </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if(item.category.title === category){
      return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onPressListItem(navigation, item)}>
              <View style={{flexDirection: 'row'}}>
                <Image
                    source={{
                    uri: item.image,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <View style={styles.containerText}>
                  <Text style={styles.articleText}>ARTICLE</Text>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text style={styles.authorText}>{item.author}</Text>
                </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View></View>
    }
};

export default Card;