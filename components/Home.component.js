import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading.component';
// import { CAMPSITES } from '../shared/campsites';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';

const RenderItem = ({ item, isLoading }) => {
  if (isLoading) {
    return <Loading />;
  }
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
  const campsites = useSelector((state) => state && state.campsites);
  const promotions = useSelector((state) => state && state.promotions);
  const partners = useSelector((state) => state && state.partners);
  return (
    <ScrollView>
      <RenderItem
        item={
          campsites.campsites.filter(
            (campsite) => campsite.featured === true
          )[0]
        }
        isLoading={campsites.isLoading}
        errMsg={campsites.errMsg}
      />
      <RenderItem
        item={
          promotions.promotions.filter((promotion) => promotion.featured)[0]
        }
        isLoading={promotions.isLoading}
        errMsg={promotions.errMsg}
      />
      <RenderItem
        item={partners.partners.filter((partner) => partner.featured)[0]}
        isLoading={partners.isLoading}
        errMsg={partners.isLoading}
      />
    </ScrollView>
  );
};

Home.navigationOptions = () => ({
  title: 'Home',
});
export default Home;
