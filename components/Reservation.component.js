import { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Reservation = (props) => {
  const [campers, setCampers] = useState(1);
  const [hikeIn, setHikeIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleReservation = () => {
    console.log(JSON.stringify({ campers, hikeIn, date, showCalendar }));
    setCampers(1);
    setHikeIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };

  return (
    <ScrollView>
      <View>
        <Text>Number of Campers</Text>
      </View>
    </ScrollView>
  );
};

Reservation.navigationOptions = () => ({
  title: 'Reserve campsite',
});
