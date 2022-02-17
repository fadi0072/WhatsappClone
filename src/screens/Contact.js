import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
const Contact = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  // console.log(userName + password);
  const submit = () => {
    if (userName === 'fahad' && password === 'fahad@123') {
      alert(`Thankyou ${userName}`);
      navigation.navigate('Home', {myName: `${userName}`});
    } else {
      alert('Wrong User Name & Password');
    }
  };
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainHeader}>Login Form</Text>
      <Text>you can contact me on Whatsapp : 03306805573</Text>
      <View style={Styles.inputContainer}>
        <Text style={Styles.labels}>Enter Your Name</Text>
        <TextInput
          style={Styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={actualData => setUserName(actualData)}
        />
        <Text style={Styles.labels}>Enter Your Password</Text>
        <TextInput
          style={Styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={actualData => setPassword(actualData)}
        />
      </View>
      <View style={Styles.wrapper}>
        <CheckBox
          disabled={false}
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? '#4630ED ' : undefined}
        />
        <Text style={Styles.wrapperText}>
          I have read all Terms & Conditions.
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={[
            Styles.buttonStyle,
            {
              backgroundColor: agree ? '#4630ED' : 'grey',
            },
          ]}
          disabled={!agree}
          onPress={() => submit()}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 25,
  },
  wrapperText: {
    paddingTop: 5,
  },
  buttonStyle: {
    borderRadius: 5,
    color: '#344055',
    fontWeight: '900',
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: 'capitalize',
    fontFamily: 'bold',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,

    color: '#ffffff',
  },
});
export default Contact;
