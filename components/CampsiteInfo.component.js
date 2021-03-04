import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderCampsite = ({ campsite }) => {
  if (campsite) {
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

const CampsiteInfo = (props) => <RenderCampsite campsite={props.campsite} />;

export default CampsiteInfo;
