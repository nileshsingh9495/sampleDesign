import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PremiumImage from '../assets/home/Premium.svg';
import SearchImage from '../assets/home/Search.svg';
import ScanSingle from '../assets/home/Scan-Single.svg';
import ScanBatch from '../assets/home/Scan-Batch.svg';
import ScanOCR from '../assets/home/Scan-OCR.svg';
import SceneImage from '../assets/home/SceneImage.png';
import Pro from '../assets/home/Pro.svg';

const width = Dimensions.get('window').width;

const INFO_DATA = [
  {
    image: <ScanSingle />,
    text: 'Single Scan',
  },
  {
    image: <ScanBatch />,
    text: 'Batch Scan',
  },
  {
    image: <ScanOCR />,
    text: 'Scan to Text',
  },
];

const RECENT_DATA = [
  {
    id: 1,
    image: SceneImage,
    posted: '2d ago',
  },
  {
    id: 2,
    image: SceneImage,
    posted: '3d ago',
  },
  {
    id: 3,
    image: SceneImage,
    posted: '4d ago',
  },
  {
    id: 4,
    image: SceneImage,
    posted: '5d ago',
  },
];

const RenderWelcomeView = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
      }}>
      <View>
        <Text style={styles.eveningText}>Good Evening</Text>
        <Text style={styles.welcomeText}>Welcome back</Text>
      </View>
      <PremiumImage />
    </View>
  );
};
const RenderUnlockPremiumView = () => {
  const premiumGradinet = ['#0563DB', '#0F8CFF'];
  // const premiumGradinet = ['#0563DB', '#0F8CFF', '#0252CA','#49A6FC'];
  return (
    <LinearGradient
      // locations={[0,1]}
      colors={premiumGradinet}
      style={{
        width: '100%',
        padding: 16,
        borderRadius: 10,
      }}
      useAngle={true}
      angle={275}
      // angleCenter={}
      // start={{x: 0.6, y: 0}}
      start={{x: 0.0, y: 0.25}}
      // end={{x: 0.5, y: 1.0}}
    >
      <Text style={styles.unlockText}>Unlock Premium</Text>
      <Text style={styles.unlockContent}>
        Create Unlimited HD Scan & Picture to Text Scans without watermarks
      </Text>
      <View
        style={{
          position: 'absolute',
          right: 0,
        }}>
        <Pro />
      </View>
    </LinearGradient>
  );
};

const RenderSearch = () => {
  return (
    <View style={styles.searchView}>
      <SearchImage />
      <Text style={styles.searchText}>Search through your scans</Text>
    </View>
  );
};

const RenderInfo = () => {
  return (
    <View style={styles.renderInfoView}>
      {INFO_DATA?.map(item => {
        return (
          <View key={item.text} style={styles.infoBox}>
            {item.image}
            <Text style={styles.infoText}>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
};
const RenderRecentSearch = () => {
  return (
    <View style={styles.recentView}>
      <Text style={styles.recentText}>Recent Scans</Text>
      <FlatList
        data={RECENT_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: width / 2,
                height: width / 2,
                marginRight: 16,
              }}
              key={item.id}>
              <Image
                source={item?.image}
                style={{width: '100%', height: '100%', borderRadius: 8}}
              />
              <Text style={styles.postedText}>{item.posted}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
        bounces={false}
      />
    </View>
  );
};

const HomePage = () => {
  return (
    <View style={styles.container}>
      <RenderWelcomeView />
      <RenderUnlockPremiumView />
      <RenderSearch />
      <RenderInfo />
      <RenderRecentSearch />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  eveningText: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: 'black',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: '#9B9B9B',
  },
  unlockText: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: '#fff',
  },
  unlockContent: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: '#fff',
    paddingRight: 32,
    marginTop: 6,
  },
  searchText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'SF-Pro-Rounded-Regular',
    color: '#606060',
    marginLeft: 15,
  },
  searchView: {
    backgroundColor: '#fff',
    height: 38,
    borderRadius: 20,
    width: '100%',
    padding: 11,
    flexDirection: 'row',
    marginVertical: 25,
  },
  renderInfoView: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    minHeight: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#000',
    marginTop: 5,
  },
  recentView: {
    width: '100%',
    // flexDirection: 'row',
  },
  postedText: {
    color: '#fff',
    backgroundColor: '#49A6FC',
    paddingHorizontal: 7,
    paddingVertical: 4,
    position: 'absolute',
    borderRadius: 5,
    bottom: 10,
    left: 10,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'SF-Pro-Rounded-Regular',
  },
  recentText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'SF-Pro-Rounded-Bold',
    color: '#000',
    marginBottom: 10,

    // marginTop: 5,
  },
});
