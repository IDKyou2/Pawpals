import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Footer = ({
    onNavigateToHome,
    onNavigateToChatForum,
    handleNotificationClick,
    newChatsCount,
    newPostsCount,
    //initialChatsCount = 0,
}) => {
    //const [newChatsCount, setNewChatsCount] = useState(initialChatsCount);

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerButton} onPress={onNavigateToHome}>
                <Image
                    source={require("../assets/images/home-icon.png")}
                    style={styles.footerIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={onNavigateToChatForum}
            >
                {newChatsCount > 0 && (
                    <Text style={styles.notificationCount}>
                        {newChatsCount > 99 ? "99+" : newChatsCount}
                    </Text>
                )}
                <Image
                    source={require("../assets/images/message-icon.png")}
                    style={styles.footerIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.footerButton}
                onPress={handleNotificationClick}
            >
                {newPostsCount > 0 && (
                    <Text style={styles.notificationCount}>{newPostsCount > 99 ? "99+" : newPostsCount}</Text>
                )}
                <Image
                    source={require("../assets/images/notification-icon.png")}
                    style={styles.footerIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    footerButton: {
        padding: 10,
        position: "relative",
    },
    footerIcon: {
        width: 30,
        height: 30,
        tintColor: "#6B4E31",
    },
    notificationCount: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: "#FF4D4D",
        color: "#FFF",
        borderRadius: 12,
        minWidth: 26,              // increased from 24
        height: 24,
        lineHeight: 24,
        paddingHorizontal: 4,      // increased slightly for wider text
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "Roboto",
        textAlign: "center",
        overflow: "hidden",
    },

});

export default Footer;