import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
const cheerio = require('react-native-cheerio');
const wrmcUrl = 'http://wrmc.middlebury.edu';

export default class PlaylistScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      playlist: null,
      loading: true
    }
    this.getPlaylist = this.getPlaylist.bind(this);
    this.getPlaylist();
  }

  async getPlaylist() {
    const wresponse = await fetch(wrmcUrl)
    .then(function(response){
        return response.text()
    });
    const htmlString = wresponse;
    const $ = cheerio.load(htmlString);

    //const currentShow = $('section.onair').find('a').text();

    var imgs = []
    $('section.playlist').find('img.art').each(function(i, elm) {
      imgs.push($(this).attr('src'));
    });

    var artists = []
    $('section.playlist').find('span.artist').each(function(i, elm) {
      artists.push($(this).text());
    });

    var titles = []
    $('section.playlist').find('span.title').each(function(i, elm) {
      titles.push($(this).text());
    });

    var times = []
    $('section.playlist').find('time').each(function(i, elm) {
      times.push($(this).text());
    });

    var newPlaylist = [];
    for (i = 0; i < imgs.length; i++) {
      var row = [];
      row.push(imgs[i]);
      row.push(artists[i]);
      row.push(titles[i]);
      row.push(times[i])
      newPlaylist.push(row)
    }

    this.setState({
      playlist: newPlaylist,
      loading: false
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    else {

      const art = (src) => (
        <Image
          style={{ width : 34, height : 34 }}
          source={{uri: src}}
        />
      );

      const bold = (string) => (
        <Text style={{ fontWeight: 'bold' }}>
          {string}
        </Text>
      );

      var playlistData = [];
      this.state.playlist.forEach((elem) => {
        var row = [];
        row.push(art(elem[0]));
        row.push(bold(elem[1]));
        row.push(elem[2]);
        row.push(elem[3])
        playlistData.push(row);
      });

      return (
        <ScrollView>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            {playlistData.map((data, index) => (
              <Row
                data={data}
                style={index%2 == 0 ? {backgroundColor: '#E0E1E2', height: 50} : {backgroundColor: '#FFFFFF', height: 50}}
              />
              ))
            }
          </Table>
        </ScrollView>
      );
    }
  }
}
