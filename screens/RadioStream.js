import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

const cheerio = require('react-native-cheerio');
const wrmcUrl = 'http://wrmc.middlebury.edu';

export default class RadioStream extends React.Component {

  async cheeriorequest() {

      const wresponse =await fetch(wrmcUrl)
        .then(function(response){
            return response.text();
        })
        .catch(function (err) {
            return err;
        });

      const htmlString = wresponse;
      console.log('wtf')
      console.log(htmlString)
      const $ = cheerio.load(htmlString);


  //   const wresponse = await fetch(wrmcUrl).then(function(response){
  //       return response.json();
  //       }).catch(function(error) {
  //           console.log('There has been a problem with your fetch operation: ' + error.message);
  //           // ADD THIS THROW error
  //           throw error;
  //       });
  //   const htmlString = await wresponse.text().catch((error)=>{
  //    console.log("Api call error");
  //    alert(error.message);
  // });
    //const $ = cheerio.load(htmlString);
  };

  constructor() {
    super()
    this.cheeriorequest()
    this.state = {
      playing: false,
      img: require('../logos/logo_play.png')
    };
    this._onPressButton=this._onPressButton.bind(this)

};

  static navigationOptions = {
    header: null,
  };

  _onPressButton() {
    if (this.state.playing == false){
      ReactNativeAudioStreaming.play("http://boombox.middlebury.edu:8000/", {showIniOSMediaCenter: true, showInAndroidNotifications: true});
      this.setState({
          playing: true,
          img: require('../logos/logo_pause.png')
        });
    }else{
      ReactNativeAudioStreaming.pause();
      this.setState({
          playing: false,
          img: require('../logos/logo_play.png')
      });
    }
  }


  render() {
    return (
      <View>
      <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
        <View style={styles.button}>
          <Image source={this.state.img}
            style={{width: 400, height: 100, resizeMode: 'contain', marginTop: 300}} />
        </View>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
