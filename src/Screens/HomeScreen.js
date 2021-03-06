import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, Platform} from 'react-native';
import ScreenComponent from '../Components/ScreenComponent';
import {
  LineChart,
  BarChart,
  ProgressChart,
  StackedBarChart,
} from 'react-native-chart-kit';
import {getChartAsync, setChartAsync} from '../Utils/storage';
import ProfileCardComponenet from '../Components/ProfileCardComponenet';
import {screenHeight, screenWidth} from '../Utils/Dimensions';
import HomeScreenPickerComponent from '../Components/HomeScreenPickerComponent';
import colors from '../Utils/colors';
import {Button} from 'react-native-paper';
import {logout} from '../features/userSlice';
import {useDispatch} from 'react-redux';

const chartConfig = {
  backgroundColor: '#264653',
  backgroundGradientFrom: colors.secondary,
  backgroundGradientTo: colors.secondary,

  decimalPlaces: 2, // optional, defaults to 2dp
  // color: (opacity = 1) => colors.primary,
  // labelColor: (opacity = 1) => colors.primary,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: colors.secondary,
  },
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const ringData = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
const StackedBarChartData = {
  labels: ['Test1', 'Test2'],
  legend: ['L1', 'L2', 'L3'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};

const chartData = [
  {
    id: 0,
    title: 'Line Chart',
  },

  {
    id: 1,
    title: 'Progress Chart',
  },
  {
    id: 2,
    title: 'Bar Chart',
  },
  {
    id: 3,
    title: 'Stacked Bar Chart',
  },
];
const HomeScreen = () => {
  const [selectedChart, setSelectedChart] = useState('Line Chart');
  const animatedTranslation = useState(new Animated.Value(-500))[0];

  useEffect(() => {
    getChartAsync().then(chart => chart && setSelectedChart(chart));
    Animated.timing(animatedTranslation, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const dispatch = useDispatch();

  return (
    <ScreenComponent>
      <ProfileCardComponenet />
      <View style={{flex: 1, paddingVertical: 20}}>
        <HomeScreenPickerComponent
          data={chartData}
          selectedChart={selectedChart}
          onValueChange={(itemValue, itemIndex) => {
            setChartAsync(itemValue);
            Animated.timing(animatedTranslation, {
              toValue: 1000,
              duration: 1000,
              useNativeDriver: true,
            }).start();

            setTimeout(() => {
              animatedTranslation.setValue(-500);
              Animated.timing(animatedTranslation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
              }).start();
              setSelectedChart(itemValue);
            }, 700);
          }}
        />

        {selectedChart === chartData[0].title ? (
          <Animated.View
            style={{transform: [{translateX: animatedTranslation}]}}>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={screenWidth - 22} // from react-native
              height={screenHeight * 0.34}
              // height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
            />
          </Animated.View>
        ) : selectedChart === chartData[1].title ? (
          <Animated.View
            style={{transform: [{translateX: animatedTranslation}]}}>
            <ProgressChart
              style={styles.chart}
              data={ringData}
              width={screenWidth - 22}
              height={screenHeight * 0.34}
              // height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
            />
          </Animated.View>
        ) : selectedChart === chartData[2].title ? (
          <Animated.View
            style={{transform: [{translateX: animatedTranslation}]}}>
            <BarChart
              style={styles.chart}
              data={barData}
              width={screenWidth - 22}
              height={screenHeight * 0.34}
              // height={220}
              yAxisLabel="$"
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </Animated.View>
        ) : selectedChart === chartData[3].title ? (
          <Animated.View
            style={{transform: [{translateX: animatedTranslation}]}}>
            <StackedBarChart
              style={styles.chart}
              //   style={graphStyle}
              data={StackedBarChartData}
              width={screenWidth - 22}
              height={screenHeight * 0.34}
              // height={220}
              chartConfig={chartConfig}
            />
          </Animated.View>
        ) : (
          <Text>Nothing selected</Text>
        )}
      </View>
    </ScreenComponent>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  chart: {
    // margin: Platform.OS === 'ios' ? 0 : 0,
    borderRadius: 0,
    alignSelf: 'center',
    // width: '100%',
    // backgroundColor: 'red',
  },
});
