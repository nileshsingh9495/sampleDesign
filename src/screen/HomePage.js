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
import Pro from '../assets/home/Pro.svg';

import {INFO_DATA, RECENT_DATA} from '../constants';

const width = Dimensions.get('window').width;

const RenderWelcomeView = () => {
  return (
    <View style={styles.welcomeView}>
      <View>
        <Text style={styles.eveningText}>Good Evening</Text>
        <Text style={styles.welcomeText}>Welcome back</Text>
      </View>
      <PremiumImage />
    </View>
  );
};
const RenderUnlockPremiumView = () => {
  const premiumGradinet = ['#0563DB', '#0F8CFF', '#0252CA'];
  return (
    <View style={styles.premiumView}>
      <LinearGradient
        colors={premiumGradinet}
        style={styles.premiumBox}
        useAngle={true}
        angle={325}
        start={{x: 0.0, y: 0.25}}>
        <Text style={styles.unlockText}>Unlock Premium</Text>
        <Text style={styles.unlockContent}>
          Create Unlimited HD Scan & Picture to Text Scans without watermarks
        </Text>
        <View style={styles.premiumImageStyle}>
          <Pro />
        </View>
      </LinearGradient>
    </View>
  );
};

const RenderSearch = () => {
  return (
    <View style={styles.searchBox}>
      <View style={styles.searchView}>
        <SearchImage />
        <Text style={styles.searchText}>Search through your scans</Text>
      </View>
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

const ScanCard = ({data = {}}) => {
  const {image, id, posted} = data;
  return (
    <View
      style={{
        width: width / 2,
        height: width / 2,
        marginRight: 16,
      }}
      key={id}>
      <Image
        source={image}
        style={{width: '100%', height: '100%', borderRadius: 8}}
      />
      <Text style={styles.postedText}>{posted}</Text>
    </View>
  );
};
const RenderRecentScans = () => {
  return (
    <View style={styles.recentView}>
      <Text style={styles.recentText}>Recent Scans</Text>
      <FlatList
        data={RECENT_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => <ScanCard data={item} />}
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
      <RenderRecentScans />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    // paddingHorizontal: 24,
  },
  welcomeView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
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
  premiumView: {
    paddingHorizontal: 24,
    width: '100%',
  },
  premiumBox: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
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
  premiumImageStyle: {
    position: 'absolute',
    right: 0,
  },
  searchBox: {
    paddingHorizontal: 24,
    width: '100%',
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
    marginBottom: 15,
    paddingHorizontal: 24,
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
    paddingLeft: 24,
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
