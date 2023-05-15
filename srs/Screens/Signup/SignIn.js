import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import styles from "../Signup/Styles";
import { Text, View, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [securePassword, setSecurePassword] = useState(true)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const password1Ref = useRef()
    const EmailRef = useRef()
    const checkConfirmPassword = (value) => {

        setPassword(value)
        if (value !== password) {
            setConfirmPasswordError(true)
        }
        else {
            setConfirmPasswordError(false)
        }
    }
    return (
        <View style={styles.Background}>

            <Image style={styles.Logo} source={{ uri: 'https://i.imgur.com/x2ZGmCE.png' }} />
            <Text style={styles.Header}>Sign In Form</Text>

            <TextInput
                style={styles.TextInput}
                value={email}
                ref={EmailRef}
                onChangeText={(value) => { setEmail(value) }}
                placeholder={'Email'}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => { password1Ref.current?.focus() }}

            />
            <View style={styles.IconView}>
                <TextInput
                    ref={password1Ref}
                    value={password}
                    onChangeText={checkConfirmPassword}
                    style={[styles.TextInput, styles.inputIcon]}
                    placeholder={'Password'}
                    keyboardType={'default'}
                    secureTextEntry={securePassword}
                    returnKeyType={'done'}
                />
                {

                    securePassword ?
                        <Icon name={"eye"} size={15} style={styles.Iconstyle} onPress={() => setSecurePassword(!securePassword)} />
                        :
                        <Feather name={"eye-off"} size={15} style={{ alignSelf: 'center', marginHorizontal: 20 }} onPress={() => setSecurePassword(!securePassword)} />
                }

            </View>

            <Text style={styles.Forgetpasswrod}>
                Forget Password? Click Here
            </Text>

            <Pressable style={[styles.button]} onPress={() => submit()}>
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
        </View>




    );
};
export default SignIn;