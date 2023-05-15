import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import styles from "../Signup/Styles";
import { Text, View, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';




const HomeScreen = () => {
    // const { navigate } = this.props.navigation;
    // const {navigation}=this.props;
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);

    return (
        <View style={styles.Background}>
            <ScrollView style={styles.scrollView} >

                <Image style={styles.Logo} source={{ uri: 'https://i.imgur.com/x2ZGmCE.png' }} />
                <Text style={styles.Header}>Welcome To MHG Official APP </Text>



                 <View>
                    
                    <Video
                        source={{ uri: "https://videocdn.bodybuilding.com/video/mp4/62000/62792m.mp4" }}
                        paused={!isPlaying}
                        controls={true}
                        style={styles.backgroundVideo}
                        muted={isMuted}
                        resizeMode={"cover"}
                        repeat={true}

                    /> 

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Button
                            onPress={() => setIsPlaying(p => !p)}
                            title={isPlaying ? 'Stop' : 'Play'}
                        />
                        <Button
                            onPress={() => setIsMuted(m => !m)}
                            title={isMuted ? 'Unmute' : 'Mute'}
                        />

                    </View>
                </View>


                <View style={styles.HomeButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >

        </View>
    );
};




export default HomeScreen;