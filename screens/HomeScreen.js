import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Image } from 'react-native';

const dummyProfiles = [{ id: 1, name: 'Profile 1' }, { id: 2, name: 'Profile 2' }];
const dummyPosts = [{ id: 1, content: 'Post 1' }, { id: 2, content: 'Post 2' }];
const profileSuggestions = [{ id: 1, name: 'Suggestion 1' }, { id: 2, name: 'Suggestion 2' }];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Stories</Text>
                    <ScrollView horizontal>
                        {dummyProfiles.map(profile => (
                            <View key={profile.id} style={styles.profile}>
                                <Image
                                    source={{ uri: 'https://via.placeholder.com/50' }}
                                    style={styles.profileImage}
                                />
                                <Text>{profile.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Posts</Text>
                    {dummyPosts.map(post => (
                        <View key={post.id} style={styles.post}>
                            <Text>{post.content}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Suggestions</Text>
                    {profileSuggestions.map(profile => (
                        <View key={profile.id} style={styles.profile}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/50' }}
                                style={styles.profileImage}
                            />
                            <Text>{profile.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
                style={styles.profileButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    profile: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    post: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    profileButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default HomeScreen;
