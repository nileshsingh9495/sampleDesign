import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import IntroImage1 from '../assets/intro/intro1.svg';
import IntroImage2 from '../assets/intro/intro2.svg';
import IntroImage3 from '../assets/intro/intro3.svg';
import IntroImage4 from '../assets/intro/intro4.svg';
import RightArrow from '../assets/intro/right_arrow.svg';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// import OffersDefaultIcon from 'assets/icons/icon-no-offers.svg';

// var image = getImage({
//   width: PixelRatio.getPixelSizeForLayoutSize(46),
//   height: PixelRatio.getPixelSizeForLayoutSize(100),
// });

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
  // const {width} = useWindowDimensions();
  const {id, title, description, image, color = 'brown'} = data;
  return (
    <View
      style={[styles.renderViewContainer, {width, backgroundColor: color}]}
      key={id}>
      {image}
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>

      {/* <View style={styles.descriptionBox}>
        <Text style={styles.descriptionStyle}>{description}</Text>
        <View style={styles.circle} />
      </View> */}
    </View>
  );
};
// const RenderIntroView = () => {
//   return (
//     <View style={styles.renderViewContainer}>
//       <IntroImage1 />
//       <Text style={styles.titleStyle}>
//         Scan anything in HD, wherever you are...
//       </Text>
//       <Text style={styles.descriptionStyle}>
//         Scan and organize your work documents in structured folders. Scan single
//         or multiple documents in one swift go. Merge scans into PDFs, reorder
//         pages and share them on the fly.
//       </Text>
//       <View style={styles.circle} />
//     </View>
//   );
// };
const OnboardPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('CHECK ', currentIndex);
  return (
    <View style={styles.container}>
      {/* width={10} height={10} color={disabledIconColor}  */}
      {/* <View style={{paddingTop: 159}}> */}
      <FlatList
        data={INTRO_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        // renderItem={renderIntroView}
        renderItem={({item}) => <RenderIntroView data={item} />}
        keyExtractor={item => item.id}
        // initialNumToRender={1}
        bounces={false}
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          console.log('x / width', (x / width).toFixed(0));
          setCurrentIndex((x / width).toFixed(0));
        }}
      />

      <View style={styles.circleContainer}>
        {/* <RenderIntroView /> */}
        {INTRO_DATA?.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.circle,
                {backgroundColor: currentIndex == index ? '#49A6FC' : 'black'},
              ]}
            />
          );
        })}
        {currentIndex == INTRO_DATA.length - 1 ? (
          <View
            style={{
              backgroundColor: '#49A6FC',
              width: 55,
              height: 55,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 35,
            }}>
            <RightArrow />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default OnboardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  renderViewContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 120,
    // backgroundColor: 'skyblue',
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
    color: 'black',
    // marginTop: 20,
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
    // width:width/2
  },
  circle: {
    backgroundColor: 'green',
    width: 13,
    height: 13,
    borderRadius: 50,
    marginLeft: 15,
  },
});
