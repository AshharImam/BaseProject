import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import LoadingComponent from '../Components/LoadingComponent';
import {logout} from '../features/userSlice';
import {logoutAsync, setChartAsync} from '../Utils/storage';

const LogoutScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    // navigation.navigate('LoginScreen');
    dispatch(logout());
  }, []);

  return <LoadingComponent text="Logging out..." />;
};

export default LogoutScreen;

const styles = StyleSheet.create({});
