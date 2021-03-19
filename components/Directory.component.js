import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { useSelector } from 'react-redux';

const Directory = (props) => {
  const campsites = useSelector(
    (state) => state.campsites && state.campsites.campsites
  );

  const { navigate } = props.navigation;
  const renderDirectoryItem = ({ item }) => {
    return (
      <Tile
        title={item.name}
        caption={item.description}
        featured
        onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
        imageSrc={{ uri: `${baseUrl}${item.image}` }}
      />
    );
  };
  //navigation.navigate function takes as first argument required name of the screen to navigate to and second optional argument that adds extra parameters to the route
  //In tis case I will name the key of the param 'campsteId'.
  //ListItem comes with its own onPress prop. The second onPress here(in the callback function) has been handed down from Directory(just used the same function name for convenience)

  return (
    <FlatList
      data={campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

Directory.navigationOptions = () => ({
  title: 'Directory',
});

export default Directory;
