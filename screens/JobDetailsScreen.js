import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Details</Text>
      <Text style={styles.label}>Title:</Text>
      <Text style={styles.value}>{job.title}</Text>
      <Text style={styles.label}>Company:</Text>
      <Text style={styles.value}>{job.company}</Text>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>Work on cutting-edge technology and innovation.</Text>
      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>Remote</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Save Job" onPress={() => alert('Job Saved')} color="#FFC107" />
        <Button title="Apply" onPress={() => alert('Application Submitted')} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F8E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default JobDetailsScreen;