import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Job App</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('JobListing')}
        >
          <Text style={styles.buttonText}>Browse Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SavedJobs')}
        >
          <Text style={styles.buttonText}>Saved Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ApplicationTracker')}
        >
          <Text style={styles.buttonText}>Application Tracker</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1E88E5',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default HomeScreen;