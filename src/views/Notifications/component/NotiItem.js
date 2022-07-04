import React from 'react';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';

import {
  Surface,
  Button,
  Subheading,
  Divider,
  Headline,
} from 'react-native-paper';

import {format} from 'date-fns';

const NotiItem = ({name, countComment, countFollow, creationTime, navigate}) => {
  return (
    <TouchableWithoutFeedback onPress={navigate}>
      <Surface style = {styles.home}>
        <Surface>
          <Surface>
            <Headline numberOfLines={2}>{name}</Headline>
            <Subheading>{format(new Date(creationTime), 'K:mm aaa - MMM, dd yyyy')}</Subheading>
          </Surface>
          <Divider />
          <Surface style={styles.reactions}>
            <Button icon="comment-outline" mode="text" color="green">
              {countComment}
            </Button>

            <Button icon="thumb-up" mode="text" color="dodgerblue">
              {countFollow}
            </Button>
          </Surface>
        </Surface>
      </Surface>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  home: {
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'column',
  },
  reactions: {
    marginTop: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});
export default NotiItem;
