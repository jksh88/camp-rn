import React, { useState } from 'react'; //imrs
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';
import { PARTNERS } from '../shared/partners';
import Mission from './Mission.component';

const About = (props) => {
  const [partners, setPartners] = useState(PARTNERS);

  const renderPartner = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
      />
    );
  };
  return (
    <ScrollView>
      <Mission />
      <Card title="Community Partners">
        <FlatList
          data={partners}
          renderItem={renderPartner}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      </Card>
    </ScrollView>
  );
  //https://nyxo.app/fixing-virtualizedlists-should-never-be-nested-inside-plain-scrollviews
};

About.navigationOptions = () => ({
  title: 'About us',
});
export default About;
