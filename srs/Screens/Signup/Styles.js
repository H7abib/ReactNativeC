import { StyleSheet } from 'react-native';
import { w, h, moderateScale } from '../../Dimenstions/Metrices.js';



const styles = StyleSheet.create({

  Logo: {
    width: w(120),
    height: h(60),
    marginTop: h(10),
    // alignSelf:'' ,
  },



  Header: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    margin: 8,
    color: '#FFFFFF',
    padding: 10,
    fontSize: 25,
    fontStyle: 'italic',
    opacity: 0.8,
    textAlign: 'center',

  },

  TextInput: {
    alignSelf: 'center',
    color: 'black',
    width: w(350),
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: h(10),
    paddingHorizontal: w(10),
  },


  Address: {
    alignSelf: 'center',
    color: 'black',
    width: w(350),
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: h(10),
    paddingHorizontal: w(10),
    textAlignVertical:'top',
    height:h(70)
  },

  errorMes:{
color:'red',
fontSize:14,
marginHorizontal:10
  },
  NamesView: {
    marginTop: h(20),
    flexDirection: 'row',
    justifyContent: 'center',

  },
  Names: {
    alignSelf: 'flex-start',
    color: 'black',
    width: w(160),
    fontWeight: 'bold',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: h(10),
    paddingHorizontal: w(10),
    marginHorizontal: w(13),

  },

  Check: {
    marginTop: h(20),
    flexDirection: 'row',
    paddingHorizontal: w(10),

  },

  Background: {
    backgroundColor: '#26183d',
    flex: 1,

  },

  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 15,
    width: w(175),
    alignSelf: 'center',

  },


  buttonText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'


  },


  checkbox: {
    alignSelf: 'center',
  },



  Iconstyle: {
    // position: 'relative',
    alignSelf: 'center',
    color: 'black',
    marginHorizontal: 20

  },


  IconView: {
    flexDirection: 'row', 
    borderColor: 'black', 
    borderWidth: 1, 
    backgroundColor: 'white',
    borderRadius: 15, 
    width: w(350), 
    marginTop: h(10),
    alignSelf:'center'
  },

  scrollView: {
    marginHorizontal: .5,
  },
  inputIcon:{
    width: w(300),
    marginTop:0
  }


});
export default styles;  