import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, selectUser} from '../features/userSlice';

import {fontSizeLarge, screenHeight} from '../Utils/Dimensions';
import colors from '../Utils/colors';

import ScreenComponent from '../Components/ScreenComponent';
import LoadingComponent from '../Components/LoadingComponent';
import {homeMadeApple, monoton} from '../Utils/fonts';

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const userSelectorUser = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);
  const loginHandler = () => {
    Keyboard.dismiss();
    dispatch(login(user));
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  console.log('USER REDUX', userSelectorUser);
  if (isLoading) return <LoadingComponent />;
  return (
    <ScreenComponent>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.touchUnderlay}
      />
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <Text style={styles.backgroundText}>
          <Text>Base</Text>
          <Text>Project</Text>
        </Text>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text
              style={[
                styles.logoText,
                {
                  marginTop: 50,
                  marginRight: 70,
                },
              ]}>
              Base
            </Text>
            <Text
              style={[
                styles.logoText,
                {
                  marginTop: -65,

                  marginBottom: 30,
                  marginLeft: 50,
                },
              ]}>
              Project
            </Text>
            <TextInput
              placeholder="Username"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderColor={colors.black}
              style={styles.loginFormTextInput}
              onChangeText={text => setUser(text)}
            />
            <TextInput
              placeholder="Password"
              placeholderColor={colors.black}
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.btn} onPress={loginHandler}>
              <Text
                style={{
                  color: colors.secondary,
                  fontSize: fontSizeLarge,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenComponent>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 50,
    // backgroundColor: colors.primary,
    // fontWeight: 'bold',
    // margin: 5,
    textAlign: 'center',

    color: colors.primary,
    fontFamily: homeMadeApple,
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    color: colors.black,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  btn: {
    borderRadius: 5,

    backgroundColor: colors.primary,
    bottom: 20,
    width: '90%',
    marginVertical: 30,
    height: screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  backgroundText: {
    fontFamily: monoton,
    position: 'absolute',
    alignSelf: 'center',
    transform: [
      {
        rotate: '-90deg',
      },
    ],
    opacity: 0.5,
    fontSize: 80,
    width: '200%',
    color: colors.grey,
    elevation: -10,
    top: 250,
    flex: 1,
  },
});
