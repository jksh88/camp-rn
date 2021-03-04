import React, { useState } from 'react';
import Directory from './Directory.component';
import { CAMPSITES } from '../shared/campsites';

const Main = (props) => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  return <Directory campsites={campsites} />;
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
