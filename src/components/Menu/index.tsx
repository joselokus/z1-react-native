
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { CategoryType } from '../Card/types';
import styles from './styles';

const Menu = ({ item, title, categorySelected, categorySelectedHandler } : {item: CategoryType, title: string, categorySelected: string, categorySelectedHandler: (item: CategoryType) => void}) => {

    const onPressMenuItem = () => {
        categorySelectedHandler(item);
    } 
    
    return (
      <View style={[styles.item, categorySelected == title ? styles.bgActive : styles.bg]}>
          <TouchableOpacity onPress={() => onPressMenuItem()}>
          <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default React.memo(Menu);