import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import JobListingScreen from './screens/JobListingScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import SavedJobsScreen from './screens/SavedJobsScreen';
import ApplicationTrackerScreen from './screens/ApplicationTrackerScreen';
import JobsContextProvider from './contexts/JobsContext';
import UserContextProvider from './contexts/UserContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserContextProvider>
      <JobsContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="JobListing" component={JobListingScreen} />
            <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
            <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
            <Stack.Screen name="ApplicationTracker" component={ApplicationTrackerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </JobsContextProvider>
    </UserContextProvider>
  );
};

export default App;