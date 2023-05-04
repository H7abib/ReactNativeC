import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import styles from './Styles';
import { Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';





const App = () => {
	const [email, setEmail] = useState("")
	const [firstname, setfirstname] = useState("")
	const [address, setaddress] = useState("")
	const [Phone, setPhone] = useState("")
	const [lastname, setlastname] = useState("")
	const [password, setPassword] = useState("")
	const [password2, setPassword2] = useState("")
	const [securePassword, setSecurePassword] = useState(true)
	const [confirmPasswordError, setConfirmPasswordError] = useState(false)
	const password1Ref = useRef()
	const password2Ref = useRef()
	const AddressRef = useRef()
	const secoundNameRef = useRef()
	const PhonenumnerRef = useRef()
	const EmailRef = useRef()
	const Terms = useRef()



	const [toggleCheckBox, setToggleCheckBox] = useState(false)

	const checkConfirmPassword = (value) => {
		setPassword2(value)
		if (value !== password) {
			setConfirmPasswordError(true)
		}
		else {
			setConfirmPasswordError(false)
		}
	}
const submit=()=>{
	console.log("submit");
}
	return (
		<View style={styles.Background}>


			<ScrollView style={styles.scrollView}>

				<Image style={styles.Logo} source={{ uri: 'https://i.imgur.com/x2ZGmCE.png' }} />

				<Text style={styles.Header}>
					Sign Up Form
				</Text>


				<View style={styles.NamesView}	>
					<TextInput
						style={styles.Names}
						value={firstname}
						onChangeText={(value) => { setfirstname(value) }}
						cursorColor={'red'}
						placeholder={'First Name'}
						keyboardType={'default'}
						returnKeyType={'next'}
						onSubmitEditing={() => { secoundNameRef.current?.focus() }}
					/>
					<TextInput
						style={styles.Names}
						value={lastname}
						ref={secoundNameRef}
						onChangeText={(value) => { setlastname(value) }}
						cursorColor={'red'}
						placeholder={'Last Name'}
						keyboardType={'default'}
						returnKeyType={'next'}
						onSubmitEditing={() => { AddressRef.current?.focus() }}

					/>
				</View>

				<TextInput
					style={styles.Address}
					value={address}
					ref={AddressRef}
					onChangeText={(value) => { setaddress(value) }}
					placeholder={'Address'}
					numberOfLines={3}
					multiline={true}
					keyboardType={'default'}
					returnKeyType={'done'}
					onSubmitEditing={() => { PhonenumnerRef.current?.focus() }}

				/>

				<TextInput
					style={styles.TextInput}
					value={Phone}
					ref={PhonenumnerRef}
					onChangeText={(value) => { setPhone(value) }}
					placeholder={'Phone Number'}
					keyboardType={'phone-pad'}
					maxLength={11}
					returnKeyType={'next'}
					onSubmitEditing={() => { EmailRef.current?.focus() }}

				/>

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





				<TextInput
					ref={password1Ref}
					value={password}
					onChangeText={(value) => { setPassword(value) }}
					style={styles.TextInput}
					placeholder={'password'}
					keyboardType={'default'}
					secureTextEntry={securePassword}
					returnKeyType={'next'}
					onSubmitEditing={() => { password2Ref.current?.focus() }}


				/>
				<View style={styles.IconView}>
					<TextInput
						ref={password2Ref}
						value={password2}
						onChangeText={checkConfirmPassword}
						style={[styles.TextInput, styles.inputIcon]}
						placeholder={'Retype password'}
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
				{confirmPasswordError&&<Text style={styles.errorMes}>Error in retype password</Text>}

				<View style={styles.Check} >
					<CheckBox
						disabled={false}
						tintColors={{ true: 'green', false: 'white' }}
						onFillColor={'blue'}
						color="white"
						value={toggleCheckBox}
						style={{ marginTop: 3 }}
						onValueChange={(newValue) => setToggleCheckBox(newValue)}
					/>
					<Text style={{ color: 'white', alignSelf: 'center', fontSize: 15 }}>agree our terms</Text>
				</View>

				<View style={styles.NamesView}	>
					<Pressable style={[styles.button,!toggleCheckBox&&{backgroundColor:'gray'}]} onPress={()=>toggleCheckBox&&submit()}>
						<Text style={styles.buttonText}>Submit</Text>
					</Pressable>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText} >Reset</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>

		</View>
	);
};
export default App;