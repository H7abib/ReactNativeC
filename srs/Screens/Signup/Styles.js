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
    alignSelf: 'center',
    fontFamily: 'serif',
    marginTop: h(10),
    color: '#FFFFFF',
    padding: h(10),
    fontSize: 25,
    fontStyle: 'italic',
    opacity: 1,
    width: w(250),
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
    textAlignVertical: 'top',
    height: h(70)
  },

  errorMes: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 10
  },
  NamesView: {
    marginTop: h(20),
    flexDirection: 'row',
    justifyContent: 'center',

  },
  Names: {
    alignSelf: 'flex-start',
    color: 'black',
    width: w(167),
    fontWeight: 'bold',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: h(10),
    paddingHorizontal: w(10),
    marginHorizontal: w(8),

  },

  Check: {
    marginTop: h(20),
    flexDirection: 'row',
    paddingHorizontal: w(10),
    justifyContent: 'center',


  },

  Background: {
    backgroundColor: '#26183d',
    flex: 1,

  },

  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: h(10),
    width: w(175),
    alignSelf: 'center',
    marginBottom: h(10),

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
    marginBottom: h(20),
    alignSelf: 'center'
  },

  scrollView: {
    marginHorizontal: .5,
  },
  inputIcon: {
    width: w(300),
    marginTop: 0
  },

  HomeButtons: {
    paddingTop: h(20),
    height: h(150),
    alignContent: 'space-between',
    marginTop: h(20),
    // flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  backgroundVideo: {
    paddingTop: h(20),
    height: h(600),
    width: w(350),
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 10,
    paddingBottom: h(20),
    borderColor: 'white',
    alignItems: 'center',
  },

  Forgetpasswrod: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: h(10),
    fontWeight: 'bold',
    marginBottom: h(10),

  },


});
export default styles;  