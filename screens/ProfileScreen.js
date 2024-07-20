import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const dummyPosts = [
    { id: 1, content: 'Post 1' },
    { id: 2, content: 'Post 2' },
    { id: 3, content: 'Post 3' },
];

const ProfileScreen = ({ route }) => {
    const { username } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.profileImage}
                />
                <Text>{username}</Text>
                <Text>Followers: 100</Text>
                <Text>Following: 200</Text>
            </View>
            <View style={styles.secondSection}>
                <Text>Posts: 3</Text>
            </View>
            <ScrollView horizontal style={styles.thirdSection}>
                {dummyPosts.map(post => (
                    <View key={post.id} style={styles.postCard}>
                        <Text>{post.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    topSection: {
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    secondSection: {
        marginVertical: 20,
        alignItems: 'center',
    },
    thirdSection: {
        flexDirection: 'row',
    },
    postCard: {
        width: 150,
        height: 150,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default ProfileScreen;
