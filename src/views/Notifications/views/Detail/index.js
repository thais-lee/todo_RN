import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import NotiContent from '../../component/content';
import NotiComment from '../../component/comment';

const width = Dimensions.get('window').width;

const DetailView = ({route}) => {
  const item = route.params;
  return (
    <ScrollView style={styles.home}>
      <View>
        <Title style={{width: '100%', padding: 10}}>{item.name}</Title>
        <NotiContent data={item.data} />
      </View>
      {item.fileUrl ? (
        <Image source={{uri: item.fileUrl}} style={styles.image} />
      ) : null}
      <NotiComment notiId={item.id}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    // backgroundColor: '#E6D5B8',
  },
  image: {
    width: width,
    height: 200,
    marginTop: 20,
  },
});
export default DetailView;
