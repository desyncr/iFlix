var React = require('react');
var $ = require('jQuery');
var LoginPage = require('./loginPage');

FB.init({"appId":"1491258637764702","status":true,"cookie":true,"xfbml":true,"oauth":true,version    : 'v2.0'});
React.renderComponent(<LoginPage/>,document.getElementById('reactContainer'));