import React from 'react';
import {useWindowDimensions} from 'react-native';

import RenderHTML from 'react-native-render-html';
import {useTheme} from 'react-native-paper';

const NotiContent = ({data}) => {
  const {width} = useWindowDimensions();
  const theme = useTheme();
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      fontSize: 16,
      color: theme.colors.text,
    },
    a: {
      color: theme.colors.primary,
    },
  };
  return (
    <RenderHTML
      contentWidth={width}
      source={{html: data}}
      tagsStyles={tagsStyles}
    />
  );
};

export default NotiContent;
