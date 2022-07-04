import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {List, Avatar, Text} from 'react-native-paper';
import formatDistance from 'date-fns/formatDistance';
import NotiApi from '@myapp/features/notification/api';

const NotiComment = ({notiId}) => {
  const [comment, setComment] = useState([]);
  const [isExpand, setIsExpand] = useState(false);

  const showComment = () => setIsExpand(!isExpand);

  const fetchNotiComment = async () => {
    const response = await NotiApi.getAllCommentNotiApi(notiId);
    setComment(response);
  };

  useEffect(() => {
    fetchNotiComment();
  }, [notiId]);

  const Ava = ({ava}) => {
    return (
      <Avatar.Image
        size={40}
        source={ava ? {uri: ava} : require('@myapp/asset/banana.png')}
      />
    );
  };

  const TimeDiff = ({creationTime}) => (
    <Text>
      {formatDistance(new Date(creationTime), new Date(), {
        addSuffix: true,
        includeSeconds: true,
      })}
    </Text>
  );

  return (
    <List.Accordion
    //   style={{backgroundColor: '#E6D5B8'}}
      title="Show comment"
      expanded={isExpand}
      onPress={showComment}>
      {comment.map(item => (
        <List.Item
          key={item.id}
          left={props => <Ava {...props} avatar={item.avatar} />}
          right={props => (
            <TimeDiff {...props} creationTime={item.creationTime} />
          )}
          title={item.fullName}
          description={item.comment}
          descriptionNumberOfLines={0}
        />
      ))}
    </List.Accordion>
  );
};

export default NotiComment;
