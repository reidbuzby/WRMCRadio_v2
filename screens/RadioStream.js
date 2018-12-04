import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

const cheerio = require('react-native-cheerio');
const wrmcUrl = 'http://wrmc.middlebury.edu';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class RadioStream extends React.Component {

    async cheeriorequest() {

        const wresponse = await fetch(wrmcUrl)
        .then(function(response){
            return response.text()
        });
        const htmlString = wresponse;
        console.log('wtf');
        const $ = cheerio.load(htmlString);

        if (this.state.currentSong != $('section.playlist').find('span.title').first().text() || this.state.loading == true){
            this.setState({
                currentDJs : $('section.onair').find('span.dj').first().text(),
                currentShow : $('section.onair').find('a').first().text(),
                currentArtist : $('section.playlist').find('span.artist').first().text(),
                currentSong : $('section.playlist').find('span.title').first().text(),
                loading : false
            });
        }

    };


    constructor() {
        super()
        this.state = {
            playing: false,
            img: require('../logos/logo_play.png'),
            currentShow: '',
            currentSong: '',
            currentArtist: '',
            currentDJs: '',
            loading: true,
        };
        this._onPressButton=this._onPressButton.bind(this)
        this.cheeriorequest=this.cheeriorequest.bind(this)
        this.cheeriorequest()

    };

    componentDidMount(){
        this.timer = setInterval(()=> this.cheeriorequest(), 60000)
    }

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
            <View style = {{flex:1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
                <Text style = {styles.ShowTitle}>
                    {this.state.currentShow}{'\n'}
                    <Text style = {{fontSize: 15, fontFamily: 'PaytoneOne-Regular',}}>
                        {this.state.currentShow == '' ? '' : 'with '}{this.state.loading ? 'Loading...' : this.state.currentDJs}
                    </Text>
                </Text>
                <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Image source={this.state.img}
                        style={{width: 400, height: 100, resizeMode: 'contain', marginTop: 100}} />
                    </View>
                </TouchableOpacity>
                    <Text style={this.state.currentSong == '' ? null : styles.songContainer}>
                        {this.state.currentSong == '' ? '' : 'You\'re listening to "'}{this.state.currentSong}
                        {this.state.currentArtist == '' ? '' :'" \n by '}{this.state.currentArtist}{'\n'}
                    </Text>
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
    songContainer: {fontSize:20,
        fontFamily: 'PaytoneOne-Regular',
        textAlign: 'center',
        backgroundColor: '#8bcee3',
        position: 'relative',
        bottom: -215,
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
    ShowTitle: {
        fontSize: 40,
        lineHeight: 50,
        textAlign: 'center',
        fontFamily: 'PaytoneOne-Regular',
        marginTop:15,
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
