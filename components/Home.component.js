import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
// import { CAMPSITES } from '../shared/campsites';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';

const RenderItem = ({ item }) => {
  if (item) {
    //DONE: item name not displayiing over the image A: needed to use 'featuredTitle' prop
    //DONE: campsites state still in Directory component? A: Correct
    return (
      <Card
        featuredTitle={item.name}
        // image={require('./images/react-lake.jpg')}
        image={{ uri: `${baseUrl}${item.image}` }}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
};

const Home = (props) => {
  // const [campsites, setCampsites] = useState(CAMPSITES);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [partners, setPartners] = useState(PARTNERS);
  const campsites = useSelector(
    (state) => state.campsites && state.campsites.campsites
  );
  const promotions = useSelector(
    (state) => state.promotions && state.promotions.promotions
  );
  const partners = useSelector(
    (state) => state.partners && state.partners.partners
  );
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
