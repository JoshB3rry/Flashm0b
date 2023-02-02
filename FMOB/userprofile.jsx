import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, Button } from 'react-native';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [feed, setFeed] = useState([]);

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handleBioChange = (value) => {
    setBio(value);
  };

  const handleProfilePictureChange = (value) => {
    setProfilePicture(value);
  };

  const handleAddPost = () => {
    if (!username || !bio || !profilePicture) {
      return;
    }

    setFeed([...feed, { username, bio, profilePicture }]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Username:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleUsernameChange}
        value={username}
      />
      <Text>Bio:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleBioChange}
        value={bio}
      />
      <Text>Profile Picture:</Text>
      {profilePicture ? (
        <Image source={{ uri: profilePicture }} style={{ width: 100, height: 100 }} />
      ) : (
        <Text>No profile picture selected</Text>
      )}
      <Button title="Add Post" onPress={handleAddPost} />
      <Text>Feed:</Text>
      <ScrollView>
        {feed.map((post, index) => (
          <View key={index} style={{ padding: 10, borderWidth: 1, marginVertical: 10 }}>
            <Text>Username: {post.username}</Text>
            <Text>Bio: {post.bio}</Text>
            <Image source={{ uri: post.profilePicture }} style={{ width: 50, height: 50 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserProfile;
