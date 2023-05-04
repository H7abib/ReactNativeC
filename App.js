import React, {useState} from 'react';
import styles from './srs/Screens/Signup/Styles.js';
import { Text, View, ImageBackground, Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';

const App = () => {
	const [count, setCount] = useState(0);
	const Plus   = () => setCount(prevCount => prevCount + 1);
	const Minus  = () => setCount(prevCount => prevCount - 1);
	const Reset  = () => setCount(prevCount => prevCount * 0);
	const [text, onChangeText] = React.useState('Enter Your Name');
	const [number, onChangeNumber] = React.useState('');


return (
	<View style={{flex:1}}>
	<ImageBackground
		source={{uri:'https://i.imgur.com/jzC0ZB1.png'}}
		style={styles.Background}>

		<View style={styles.buttons}>
		</View>
        
		<Text style={styles.MainTitle}>
        React Native 
		</Text>
				<ScrollView style={styles.scrollView}>

		

		<Text style={styles.Text}>
        Counter
		</Text>
		
		<Text style={styles.CountResult}> Count: {count}</Text>


		<View style={styles.flexrow}>

		<TouchableOpacity style={styles.Text} onPress={Plus}>
          <Text style={styles.CountButton}>Increase</Text>
        </TouchableOpacity>
		
		<TouchableOpacity style={styles.Text} onPress={Minus}>
          <Text style={styles.CountButton}>Decrese</Text>
        </TouchableOpacity>

		</View>
        
		<TouchableOpacity style={styles.Reset} onPress={Reset}>
          <Text style={styles.CountReset}>Reset</Text>
        </TouchableOpacity>




		</ScrollView>
		
  	</ImageBackground>
	</View>   
);
};
  export default App;