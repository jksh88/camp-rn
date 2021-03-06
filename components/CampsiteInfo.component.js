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
  const campsite = campsites.filter(
    (campsite) => campsite.id === campsiteId
  )[0];
  return <RenderCampsite campsite={campsite} />;
};

CampsiteInfo.navigationOptions = (screenProps) => ({
  title: 'CampsiteInformation',
});

export default CampsiteInfo;
