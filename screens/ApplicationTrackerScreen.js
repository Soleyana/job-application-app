import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { JobsContext } from '../contexts/JobsContext';

const ApplicationTrackerScreen = () => {
  const { jobs } = useContext(JobsContext);

  const appliedJobs = jobs.filter((job) => job.applied);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application Tracker</Text>
      {appliedJobs.length > 0 ? (
        <FlatList
          data={appliedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.jobItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>{item.company}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No applications submitted yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E8F5E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  jobItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ApplicationTrackerScreen;