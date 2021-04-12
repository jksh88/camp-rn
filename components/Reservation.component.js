import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Switch,
  Button,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';

const Reservation = (props) => {
  const [campers, setCampers] = useState(1);
  const [hikeIn, setHikeIn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleReservation = () => {
    console.log(JSON.stringify({ campers, hikeIn, date, showCalendar }));
    setCampers(1);
    setHikeIn(false);
    setDate(new Date());
    setShowCalendar(false);
  };
  //https://blog.logrocket.com/how-to-use-the-react-native-picker-select/
  // https://www.npmjs.com/package/react-native-picker-select/
  // https://reactnative.dev/docs/switch
  console.log('CAMPERS: ', campers);
  return (
    <ScrollView>
      <View style={styles.formRow}>
        <Text>Number of Campers</Text>
        <RNPickerSelect
          onValueChange={(value) => setCampers(value)}
          value={campers}
          items={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
          ]}
        />
      </View>
      <View style={styles.formRow}>
        <Text>Hike-In?</Text>
        <Switch
          value={hikeIn}
          onValueChange={(value) => setHikeIn(value)}
          trackColor={{ true: 'green', false: null }}
        />
      </View>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Date</Text>
        <Button
          onPress={() => setShowCalendar((setShowCalendar) => !setShowCalendar)}
          title="here"
          color="#5637DD"
          accessibilityLabel="Tap to select the reservation date"
        />
      </View>
      {showCalendar && (
        <DateTimePicker
          value={date}
          onChange={onChange}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          mode={'date'}
          style={styles.formItem}
        />
      )}
      <View style={styles.formRow}>
        <Button
          onPress={() => handleReservation()}
          title="Search"
          color="#5637DD"
          accessibilityLabel="Tap to search for available campsites to reserve"
        />
      </View>
    </ScrollView>
  );
};

Reservation.navigationOptions = () => ({
  title: 'Reserve campsite',
});

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
  },
  formItem: {
    flex: 1,
  },
});

export default Reservation;
