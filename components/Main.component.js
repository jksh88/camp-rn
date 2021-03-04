import React, { useState } from 'react';
import Directory from './Directory.component';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsiteInfo.component';
import { View } from 'react-native';

const Main = (props) => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsite, setSelectedCampsite] = useState(null);

  // const onCampsiteSelect = (campsiteId) =>
  //   setSelectedCampsite((curState) => ({
  //     ...curState,
  //     selectedCampsite: campsiteId,
  //   }));
  //Q: Why callback pattern doesn't work here?
  const onCampsiteSelect = (campsiteId) => setSelectedCampsite(campsiteId);

  return (
    <View style={{ flex: 1 }}>
      <Directory
        campsites={campsites}
        onPress={(campsiteId) => onCampsiteSelect(campsiteId)}
      />

      <CampsiteInfo
        campsite={
          campsites.filter((campsite) => campsite.id === selectedCampsite)[0]
        }
      />
    </View>
  );
};

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       campsites: CAMPSITES,
//     };
//   }
//   render() {
//     return <Directory campsites={this.state.campsites} />;
//   }
// }

export default Main;
