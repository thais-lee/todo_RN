import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import NotiApi from '@myapp/features/notification/api';
import NotiItem from '../../component/NotiItem';

const ApartmentView = ({navigation}) => {
  const [items, setItems] = React.useState([]);

  const fetchNoti = async () => {
    const response = await NotiApi.getApartmentNotiApi();
    setItems(response);
  };

  const renderItems = ({item}) => {

    return (
      <NotiItem
        name={item.name}
        countComment={item.countComment}
        countFollow={item.countFollow}
        navigate={() => navigation.navigate('Detail', item)}
        creationTime={item.creationTime}
      />
    );
  };

  React.useEffect(() => {
    fetchNoti();
  }, []);
  return (
    <View style={styles.home}>
      <View style={{borderRadius: 15, marginTop: 5}}>
        <FlatList data={items} renderItem={renderItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    // backgroundColor: '#E6D5B8',
  },
});
export default ApartmentView;
