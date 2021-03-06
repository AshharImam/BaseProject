import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserAsync = async () => {
  try {
    const value = await AsyncStorage.getItem('user');
    if (value !== 'null' && value !== null) {
      return value;
    }
  } catch (error) {}
};

export const loginAsync = async user => {
  try {
    await AsyncStorage.setItem('user', user);
  } catch (error) {}
};

export const logoutAsync = async () => {
  try {
    await AsyncStorage.setItem('user', '');
    console.log('DONE LGGING OUT');
  } catch (error) {}
};

export const setChartAsync = async chart => {
  try {
    await AsyncStorage.setItem('chart', chart);
  } catch (error) {}
};

export const getChartAsync = async () => {
  try {
    const value = await AsyncStorage.getItem('chart');
    if (value !== 'null' && value !== null) {
      return value;
    }
  } catch (error) {}
};
