import React, { useState } from 'react'; //imrs
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';
import Mission from './Mission.component';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const About = (props) => {
  const partners = useSelector((state) => {
    console.log(('STATE in useSelector : ', state));
    return state.partners && state.partners.partners;
  });
  //Just grab the parts of the store that is needed here. Not the whole store
  //Q: props or state?

  const renderPartner = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{ source: { uri: `${baseUrl}${item.image}` } }}
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
