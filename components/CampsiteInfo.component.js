import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const RenderCampsite = ({ campsite }) => {
  if (campsite) {
    console.log('CAMPSITE: ', campsite);
    return (
      <Card
        featuredTitle={campsite.name}
        image={require('./images/react-lake.jpg')}
      >
        <Text style={{ margin: 10 }}>{campsite.description}</Text>
      </Card>
    );
  }
  return <View />; //Something always has to be returned. If campsite is falsy, then an empty div(for RN empty view) will need to be returned
};

const CampsiteInfo = (props) => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const campsiteId = props.navigation.getParam('campsiteId');
  //access the parameter set up to hold the id of the campsite being passed in the callback method of onPress in Directory component
  //that parameter can be accessed from here throught the navigation prop which is passed to all components that are set up as a screen, including CampsiteInfo Component here
  const campsite = campsites.filter(
    (campsite) => campsite.id === campsiteId
  )[0];
  return <RenderCampsite campsite={campsite} />;
};

CampsiteInfo.navigationOptions = (screenProps) => ({
  title: 'CampsiteInformation',
});

export default CampsiteInfo;
