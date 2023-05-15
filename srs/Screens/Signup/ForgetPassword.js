import React from "react";
import styles from "../Signup/Styles";
import { Text, View, Image,  TextInput, Pressable } from 'react-native';
import { w, h, moderateScale } from '../../Dimenstions/Metrices.js';




       
    const Forgetpasswrod = () => {
    return (
        <View style={styles.Background}>

            <Image style={styles.Logo} source={{ uri: 'https://i.imgur.com/x2ZGmCE.png' }} />
            <Text style={styles.Header}>Reset Password Form</Text>

            <TextInput
                style={styles.TextInput}
                onChangeText={(value) => { setEmail(value) }}
                value="email"
                placeholder={'Email'}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                onSubmitEditing={() => { password1Ref.current?.focus() }}

            />
          

           
            <Pressable style={[styles.button,{marginTop:h(15)}]} onPress={() => submit()}>
                <Text style={styles.buttonText}> Reset Password</Text>
            </Pressable>
        </View>




    );
};
export default Forgetpasswrod;