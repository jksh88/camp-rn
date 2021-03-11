import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const Contact = (props) => {
  return (
    <ScrollView>
      <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
        {/* <Card.Divider /> */}
        <Text>1 nc St</Text>
        <Text>Seattle, WA 99001</Text>
        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
        <Text>Phone: 1-206-333-9392</Text>
        <Text>Email: info@nc.io</Text>
      </Card>
    </ScrollView>
  );
};
//Q: Why does Card.Divider not work?

Contact.navigationOptions = () => ({
  title: 'Contact us',
});

export default Contact;
