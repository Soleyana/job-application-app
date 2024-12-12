import React, { useContext, useState } from 'react';
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { JobsContext } from '../contexts/JobsContext';

const JobListingScreen = ({ navigation }) => {
  const { jobs, saveJob, applyForJob } = useContext(JobsContext);
  const [search, setSearch] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Listings</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search jobs..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.jobItem}
            onPress={() => navigation.navigate('JobDetails', { job: item })}
          >
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text>{item.company}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                title={item.saved ? 'Unsave' : 'Save'}
                onPress={() => saveJob(item.id)}
                color="#FFC107"
              />
              <Button
                title="Apply"
                onPress={() => applyForJob(item.id)}
                color="#4CAF50"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8E1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default JobListingScreen;