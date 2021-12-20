
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as RootNavigation from '../../utils/RootNavigation';
import { CardType } from '../Card/types';
import styles from './styles';

const onPressCloseDetails = () => {
    RootNavigation.goBack();
};

const ArticleDetails = ({route}) => {

    const { item } : {item : CardType} = route.params;

      return (
        <View style={styles.item}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => onPressCloseDetails()}><Text style={{marginLeft: 15, fontSize: 20, color: 'white'}}>X</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('You pressed ♡')}><Text style={{marginRight: 15, fontSize: 20, color: 'white'}}>♡</Text></TouchableOpacity>
                    </View>
                    <View style={styles.containerHeader}>
                        <Text style={styles.articleText}>ARTICLE</Text>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <Text style={styles.authorText}>{item.author}</Text>
                        <Image
                        source={{
                        uri: item.image,
                        }}
                        style={styles.itemPhoto}
                        resizeMode="cover"
                        />
                        <Text style={styles.contentText}>{item.content}</Text>  
                    </View>
                </ScrollView> 
            </SafeAreaView>
        </View>
      );
};

export default ArticleDetails;