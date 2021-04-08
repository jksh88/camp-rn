import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavorites } from '../redux/ActionCreators';
import { baseUrl } from '../shared/baseUrl';

const RenderCampsite = ({ campsite, isFavorite, toggleFavorite }) => {
  if (campsite) {
    return (
      <View>
        <Card
          featuredTitle={campsite.name}
          // image={require(campsite.image)}
          image={{ source: { uri: `${baseUrl}${campsite.image}` } }}
          //Q: Where is the doc for this syntax?? Couldn't find it!
        >
          {/* <Card.Image source={{ uri: `${baseUrl}${campsite.image}` }} /> */}
          <Text style={{ margin: 10 }}>{campsite.description}</Text>
          <Icon
            name={isFavorite ? 'heart' : 'heart-o'}
            type="font-awesome"
            reverse
            raised
            color="#f50"
            onPress={() => toggleFavorite(campsite.id)}
          />
        </Card>
      </View>
    );
  }
  return <View />; //Something always has to be returned. If campsite is falsy, then an empty div(for RN empty view) will need to be returned
};

const RenderComments = ({ commentsForSelectedCampsite }) => {
  // console.log('Comments printed: ', commentsForSelectedCampsite);
  const renderCommentItem = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        <Text
          style={{ fontSize: 12 }}
        >{`-- ${item.author}, ${item.date}`}</Text>
      </View>
    );
  };
  return (
    <Card title="Comments">
      <FlatList
        data={commentsForSelectedCampsite}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </Card>
  );
};

const CampsiteInfo = (props) => {
  // const [campsites, setCampsites] = useState(CAMPSITES);
  // const [comments, setComments] = useState(COMMENTS);
  const campsites = useSelector(
    (state) => state.campsites && state.campsites.campsites
  );
  const comments = useSelector(
    (state) => state.comments && state.comments.comments
  );

  const favorites = useSelector((state) => state && state.favorites);
  const dispatch = useDispatch();

  //TO REMOVE: // const [isFavorite, setIsFavorite] = useState(false);
  const campsiteId = props.navigation.getParam('campsiteId');
  //CampsiteInfo component was set up as a screen in DirecotyNavigator in Directory component.
  //Access the parameter set up to hold the id of the campsite being passed in the callback function of onPress in Directory component.
  //That parameter can be accessed from here through the navigation prop which is passed to all components that are set up as a screen, including CampsiteInfo Component here
  const campsite = campsites.filter(
    (campsite) => campsite.id === campsiteId
  )[0];
  const commentsForSelectedCampsite = comments.filter(
    (comment) => comment.campsiteId === campsiteId
  );
  //TO REMOVE: // const marktAsFavorite = () => setIsFavorite((isFavorite) => !isFavorite);
  const toggleFavorite = (campsiteId) => {
    console.log('clicked!!!');
    campsite && dispatch(changeFavorites(campsiteId));
  };
  //with isFavorite managed in local state, the state data doesn't persist. At reload, the favorite ends up going back to its default state. So, need to manage this state through redux.
  return (
    <ScrollView>
      <RenderCampsite
        campsite={campsite}
        isFavorite={favorites.includes(campsiteId)}
        toggleFavorite={toggleFavorite} //Q: not callback pattern?
      />
      <RenderComments
        commentsForSelectedCampsite={commentsForSelectedCampsite}
      />
    </ScrollView>
  );
};

CampsiteInfo.navigationOptions = (screenProps) => ({
  title: 'Campsite Information',
});

export default CampsiteInfo;
