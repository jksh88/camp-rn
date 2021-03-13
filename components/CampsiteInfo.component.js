import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';

const RenderCampsite = ({ campsite, isFavorite, markAsFavorite }) => {
  if (campsite) {
    return (
      <View>
        <Card
          featuredTitle={campsite.name}
          image={require('./images/react-lake.jpg')}
        >
          <Text style={{ margin: 10 }}>{campsite.description}</Text>
          <Icon
            name={isFavorite ? 'heart' : 'heart-o'}
            type="font-awesome"
            reverse
            raised
            color="#f50"
            onPress={() => markAsFavorite()}
          />
        </Card>
      </View>
    );
  }
  return <View />; //Something always has to be returned. If campsite is falsy, then an empty div(for RN empty view) will need to be returned
};

const RenderComments = ({ commentsForSelectedCampsite }) => {
  console.log('Comments printed: ', commentsForSelectedCampsite);
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
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [comments, setComments] = useState(COMMENTS);
  const [isFavorite, setIsFavorite] = useState(false);
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
  const markAsFavorite = () => setIsFavorite((isFavorite) => !isFavorite);
  return (
    <ScrollView>
      <RenderCampsite
        campsite={campsite}
        isFavorite={isFavorite}
        markAsFavorite={markAsFavorite}
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
