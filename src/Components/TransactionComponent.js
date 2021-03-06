import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../Utils/colors';
import {fontSizeSmall, screenHeight} from '../Utils/Dimensions';

const TransactionComponent = () => {
  return (
    <View style={styles.transactionContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginVertical: screenHeight * 0.005,
        }}>
        <Text style={styles.textColor}>2021-08-27 8:17 PM</Text>
        <Text style={[styles.textColor]}>Invoice#: 00558572-2530</Text>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Text style={[styles.textColor]}>
            20383355-Abdeali bhai Qamruddin bhai Gondalwala
          </Text>
          <Text style={[styles.textColor]}>Service Name: Consultancy</Text>
        </View>
        <View>
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              paddingHorizontal: '1%',
              alignItems: 'center',
            }}>
            <Text style={[styles.textColor, {fontSize: fontSizeSmall * 2}]}>
              <Text style={[styles.textColor]}>Rs </Text>
              900
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionComponent;

const styles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: colors.primary,
    padding: screenHeight * 0.01,
    height: screenHeight * 0.11,
    marginVertical: screenHeight * 0.005,
    borderRadius: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  textColor: {
    color: colors.white,
    fontSize: fontSizeSmall * 1,
  },
});
