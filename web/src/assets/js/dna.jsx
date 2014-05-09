var React=require('react');
var Message=require('./HelloMessage');

React.renderComponent(<Message name={'ReactDNA'}/>,document.getElementById('container'));
console.log('test');