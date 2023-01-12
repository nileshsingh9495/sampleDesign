import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IntroImage1 from '../assets/intro/intro1.svg';
import IntroImage2 from '../assets/intro/intro2.svg';
import IntroImage3 from '../assets/intro/intro3.svg';
import IntroImage4 from '../assets/intro/intro4.svg';
import RightArrow from '../assets/intro/right_arrow.svg';

const width = Dimensions.get('window').width;

const INTRO_DATA = [
  {
    id: 1,
    title: 'Scan anything in HD, wherever you are...',
    description:
      'Simply launch the AirScan app and scan any document, papers or real world photographs in seconds.',
    image: <IntroImage1 />,
    color: '#fff',
  },
  {
    id: 2,
    title: 'Navigate work documents like a Pro',
    description:
      'Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly.',
    image: <IntroImage2 />,
    color: '#fff',
  },
  {
    id: 3,
    title: 'Less time scanning homework = more time for fun',
    description:
      'Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!',
    image: <IntroImage3 />,
    color: '#fff',
  },
  {
    id: 4,
    title: 'Covert Pictures to Text with our next generation offline OCR',
    description:
      'Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds',
    image: <IntroImage4 />,
    color: '#fff',
  },
];

const RenderIntroView = ({data = {}}) => {
  const {id, title, description, image, color = 'brown'} = data;
  return (
    <View
      style={[styles.renderViewContainer, {width, backgroundColor: color}]}
      key={id}>
      {image}
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
    </View>
  );
};
const RenderRightArrow = ({isArrow = false}) => {
  if (!isArrow) return null;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.arrowViewStyle}>
      <RightArrow />
    </TouchableOpacity>
  );
};
const RenderPaginationDots = ({data = [], currentIndex = 0}) => {
  if (!data.length) return null;
  return data?.map((item, index) => {
    return (
      <View
        key={index}
        style={[
          styles.circle,
          {backgroundColor: currentIndex == index ? '#49A6FC' : '#9B9B9B'},
        ]}
      />
    );
  });
};

const OnboardPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldDisplayArrow = currentIndex == INTRO_DATA.length - 1;
  return (
    <View style={styles.container}>
      <FlatList
        data={INTRO_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => <RenderIntroView data={item} />}
        keyExtractor={item => item.id}
        bounces={false}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrentIndex((x / width).toFixed(0));
        }}
      />
      <View style={styles.circleContainer}>
        <RenderPaginationDots currentIndex={currentIndex} data={INTRO_DATA} />
        <RenderRightArrow isArrow={shouldDisplayArrow} />
      </View>
    </View>
  );
};

export default OnboardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  renderViewContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 120,
  },
  titleStyle: {
    color: 'black',
    marginTop: 50,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  descriptionBox: {
    alignItems: 'center',
    marginTop: 25,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  descriptionStyle: {
    color: '#000',
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
    paddingHorizontal: 5,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Rounded-Regular',
  },
  circleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 50,
    marginLeft: 15,
  },
  arrowViewStyle: {
    backgroundColor: '#49A6FC',
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 35,
  },
});
