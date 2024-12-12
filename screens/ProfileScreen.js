import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { UserContext } from '../contexts/UserContext';

const ProfileScreen = () => {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [location, setLocation] = useState(user?.location || '');
  const [experience, setExperience] = useState(user?.experience || '');

  const handleSave = () => {
    updateUser({ name, email, location, experience });
    alert('Profile updated successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Experience"
        value={experience}
        onChangeText={setExperience}
      />
      <Button title="Save Profile" onPress={handleSave} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});

export default ProfileScreen;