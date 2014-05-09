var React=require('react');

module.exports = React.createClass({
  render:function(){
    return(
      <div>
        <img src='img/react.png'></img>
        <h1>{this.props.name}</h1>
      </div>
  )}
})
