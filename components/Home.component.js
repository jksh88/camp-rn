import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

const RenderItem = ({ item }) => {
  if (item) {
    console.log('ITEMNAME: ', item.name);
    //TODO: item name not displayiing over the image
    return (
      <Card
        featuredtitle={item.name}
        image={require('./images/react-lake.jpg')}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const Home = (props) => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);
  return (
    <ScrollView>
      <RenderItem
        item={campsites.filter((campsite) => campsite.featured === true)[0]}
      />
      <RenderItem
        item={promotions.filter((promotion) => promotion.featured)[0]}
      />
      <RenderItem item={partners.filter((partner) => partner.featured)[0]} />
    </ScrollView>
  );
};

Home.navigationOptions = () => ({
  title: 'Home',
});
export default Home;
