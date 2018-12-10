import React from 'react';
import { View, WebView, Dimensions, StyleSheet } from 'react-native';

const cheerio = require('react-native-cheerio');
const schedUrl = 'http://wrmc.middlebury.edu/schedule/?wrmc_schedule_day=week';
const wrmcUrl = 'http://wrmc.middlebury.edu'

export default class ScheduleScreen extends React.Component {
    static navigationOptions = {
      title: 'Today\'s Show Schedule',
      headerTitleStyle : {fontFamily: 'PaytoneOne-Regular',},
    };
    constructor() {
        super()
        this.state = {
            schedhtml: '',
            loading: true,
        };
        this.cheeriorequest=this.cheeriorequest.bind(this)
        this.cheeriorequest()

    };

    async cheeriorequest() {

        const wresponse = await fetch(wrmcUrl)
        .then(function(response){
            return response.text()
        });
        var htmlString = wresponse;
        var headtag = `
        <!DOCTYPE html>
        <html lang="en-US">
        <head>
        <meta charset="UTF-8" />
        <title>WRMC 91.1 FM | WRMC 91.1 FM Middlebury College Radio</title>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="stylesheet" type="text/css" media="all" href="http://fonts.googleapis.com/css?family=EB+Garamond|Arvo:700|Paytone+One" />
        <link rel="stylesheet" type="text/css" media="all" href="http://wrmc.middlebury.edu/wp-content/themes/wrmc/style.css" />
        <link rel="pingback" href="http://wrmc.middlebury.edu/xmlrpc.php" />
        <script type="text/javascript">var templateDir = "http://wrmc.middlebury.edu/wp-content/themes/wrmc";</script>
        <!--[if lt IE 9]>
        <script src="http://wrmc.middlebury.edu/wp-content/themes/wrmc/js/html5.js" type="text/javascript"></script>
        <style>.content article.front-content .slideshow-window { margin-top:0px !important; }</style>
        <![endif]-->
        <link rel='dns-prefetch' href='//s.w.org' />
        <link rel="alternate" type="application/rss+xml" title="WRMC 91.1 FM &raquo; Home Comments Feed" href="http://wrmc.middlebury.edu/home/feed/" />
        <script type="text/javascript">
        window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/wrmc.middlebury.edu\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.9.8"}};
        !function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55358,56760,9792,65039],[55358,56760,8203,9792,65039]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
        </script>
        <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }
        </style>
        <link rel='stylesheet' id='dashicons-css'  href='http://wrmc.middlebury.edu/wp-includes/css/dashicons.min.css?ver=4.9.8' type='text/css' media='all' />
        <link rel='stylesheet' id='admin-bar-css'  href='http://wrmc.middlebury.edu/wp-includes/css/admin-bar.min.css?ver=4.9.8' type='text/css' media='all' />
        <link rel='stylesheet' id='ft-cal-single-post-page-shorts-css'  href='http://wrmc.middlebury.edu/wp-content/plugins/ft-calendar/includes/css/single-post-page-shorts.css?ver=4.9.8' type='text/css' media='all' />
        <link rel='stylesheet' id='appointments-css'  href='http://wrmc.middlebury.edu/wp-content/plugins/appointments/css/front.css?ver=2.4.0' type='text/css' media='all' />
        <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
        <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
        <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-content/plugins/ft-calendar/includes/js/jquery.tools.min.js?ver=4.9.8'></script>
        <script type='text/javascript'>
        /* <![CDATA[ */
            var FTCajax = {"ajaxurl":"http:\/\/wrmc.middlebury.edu\/wp-admin\/admin-ajax.php"};
            /* ]]> */
            </script>
            <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-content/plugins/ft-calendar/includes/js/single-post-page-shorts.js?ver=4.9.8'></script>
            <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-content/plugins/chat/js/jquery-cookie.js?ver=4.9.8'></script>
            <script type='text/javascript' src='http://wrmc.middlebury.edu/wp-content/plugins/chat/js/soundmanager2-nodebug-jsmin.js?ver=1.0.8.5'></script>
            <link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://wrmc.middlebury.edu/xmlrpc.php?rsd" />
            <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://wrmc.middlebury.edu/wp-includes/wlwmanifest.xml" />
            <meta name="generator" content="WordPress 4.9.8" />
            <link rel="canonical" href="http://wrmc.middlebury.edu/" />
            <link rel='shortlink' href='http://wrmc.middlebury.edu/' />
            <link rel="alternate" type="application/json+oembed" href="http://wrmc.middlebury.edu/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwrmc.middlebury.edu%2F" />
            <link rel="alternate" type="text/xml+oembed" href="http://wrmc.middlebury.edu/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwrmc.middlebury.edu%2F&#038;format=xml" />
            <link rel="stylesheet" href="http://wrmc.middlebury.edu/wp-content/plugins/chat/css/style.css" type="text/css" /><style type="text/css" media="print">#wpadminbar { display:none; }</style>
            <style type="text/css" media="screen">
            html { margin-top: 32px !important; }
            * html body { margin-top: 32px !important; }
            @media screen and ( max-width: 782px ) {
                html { margin-top: 46px !important; }
                * html body { margin-top: 46px !important; }
            }
            </style>
            <style type="text/css">
            .entry-content td{border:none;width:50%}td.free,div.free {background: #48c048 !important;}td.busy,div.busy {background: #ffffff !important;}td.notpossible,div.notpossible {background: #ffffff !important;}			</style>
            <link rel="icon" href="http://wrmc.middlebury.edu/files/2015/10/cropped-wrmcweblogo-32x32.jpg" sizes="32x32" />
            <link rel="icon" href="http://wrmc.middlebury.edu/files/2015/10/cropped-wrmcweblogo-192x192.jpg" sizes="192x192" />
            <link rel="apple-touch-icon-precomposed" href="http://wrmc.middlebury.edu/files/2015/10/cropped-wrmcweblogo-180x180.jpg" />
            <meta name="msapplication-TileImage" content="http://wrmc.middlebury.edu/files/2015/10/cropped-wrmcweblogo-270x270.jpg" />
            <meta property="og:image" content="http://wrmc.middlebury.edu/wp-content/themes/wrmc/images/logo_large.png">
            <style>
            .album-review { background-color:#; color:#; border-color:#; }
            .blues { background-color:#2994A3; color:#2994A3; border-color:#2994A3; }
            .classical { background-color:#FF918B; color:#FF918B; border-color:#FF918B; }
            .comedy { background-color:#FFD700; color:#FFD700; border-color:#FFD700; }
            .concerts { background-color:#; color:#; border-color:#; }
            .country-music { background-color:#CC3300; color:#CC3300; border-color:#CC3300; }
            .dream-pop { background-color:#; color:#; border-color:#; }
            .eclectic { background-color:#00B1DA; color:#00B1DA; border-color:#00B1DA; }
            .electronic { background-color:#00FF43; color:#00FF43; border-color:#00FF43; }
            .exec { background-color:#228b22; color:#228b22; border-color:#228b22; }
            .experimental { background-color:#eb42f4; color:#eb42f4; border-color:#eb42f4; }
            .folk { background-color:#14CD96; color:#14CD96; border-color:#14CD96; }
            .friendship { background-color:#00fdd0; color:#00fdd0; border-color:#00fdd0; }
            .fruit { background-color:#; color:#; border-color:#; }
            .funk { background-color:#FF9840; color:#FF9840; border-color:#FF9840; }
            .grateful-dead { background-color:#; color:#; border-color:#; }
            .hip-hop { background-color:#FA7198; color:#FA7198; border-color:#FA7198; }
            .history { background-color:#; color:#; border-color:#; }
            .indie { background-color:#0033CC; color:#0033CC; border-color:#0033CC; }
            .jazz { background-color:#6C29A3; color:#6C29A3; border-color:#6C29A3; }
            .kpop { background-color:#89cff0; color:#89cff0; border-color:#89cff0; }
            .latin { background-color:#2a52be; color:#2a52be; border-color:#2a52be; }
            .metal { background-color:#D3D3D3; color:#D3D3D3; border-color:#D3D3D3; }
            .music { background-color:#; color:#; border-color:#; }
            .my-shows { background-color:#; color:#; border-color:#; }
            .news { background-color:#9B9B9B; color:#9B9B9B; border-color:#9B9B9B; }
            .other { background-color:#; color:#; border-color:#; }
            .pop { background-color:#FF00FF; color:#FF00FF; border-color:#FF00FF; }
            .pop-punk { background-color:#190707; color:#190707; border-color:#190707; }
            .psychadelia { background-color:#; color:#; border-color:#; }
            .psychadelia-2 { background-color:#; color:#; border-color:#; }
            .psychedelia { background-color:#; color:#; border-color:#; }
            .punk { background-color:#190707; color:#190707; border-color:#190707; }
            .rb-soul { background-color:#D0A9F5; color:#D0A9F5; border-color:#D0A9F5; }
            .radio-theatre { background-color:#00FFFF; color:#00FFFF; border-color:#00FFFF; }
            .rap-music { background-color:#681d92; color:#681d92; border-color:#681d92; }
            .reggae { background-color:#0AC02B; color:#0AC02B; border-color:#0AC02B; }
            .rock { background-color:#F50046; color:#F50046; border-color:#F50046; }
            .sepomana { background-color:#; color:#; border-color:#; }
            .show-review { background-color:#; color:#; border-color:#; }
            .sports { background-color:#2E3B0B; color:#2E3B0B; border-color:#2E3B0B; }
            .talk { background-color:#FA3F74; color:#FA3F74; border-color:#FA3F74; }
            .timeline { background-color:#; color:#; border-color:#; }
            .uncategorized { background-color:#9BBC2F; color:#9BBC2F; border-color:#9BBC2F; }
            .world { background-color:#FFB700; color:#FFB700; border-color:#FFB700; }
            </style>
            <link href='http://fonts.googleapis.com/css?family=Podkova:400,700' rel='stylesheet' type='text/css'>
            </head>`
        console.log('wtf');
        htmlString = headtag + '<aside class="sidebar">' + htmlString.substring(htmlString.indexOf('<section class="schedule">')+114, htmlString.indexOf('See Full Schedule') + 40).replace('accordion', '') + '</aside>'
        console.log(htmlString)
        this.setState({
            schedhtml: htmlString,
            loading : false,
        });

    };
  render() {
      var pheight = Dimensions.get('window').height;
      console.log(pheight)
    return (
        <View style = {{height: pheight - 120 }}>
   <WebView
   source = {{ html: this.state.schedhtml}}
   />
</View>
    )
  }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titlestyle: {
        fontFamily: 'PaytoneOne-Regular',
        backgroundColor: '#E390BD',
    }
});
