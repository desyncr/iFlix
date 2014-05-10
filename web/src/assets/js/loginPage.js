React = require('react');
var $ = require('jQuery');

var loginContainer = React.createClass({
    render: function () {
        return(
            <div className="row">
                <div className="login-container">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h3>Yo, you should login</h3>
                    </div>
                    <div className="col-md-4 col-xs-10 col-xs-offset-1 text-center col-md-offset-4 login-box">
                        <a href="#" onClick={this.props.login} className="connect_with_facebook">
                            <h2>Enter Narnia</h2>
                        </a>
                    </div>
                </div>
            </div>
            );
    }
});

var loggedInContainer = React.createClass({
    render: function () {
        return(
            <div className="row">
                <div className="login-container">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h3>Hey {this.props.name}, we're not launched yet :(</h3>
                    </div>

                    <div className="col-md-4 col-xs-10 col-xs-offset-1 text-center col-md-offset-4 login-box">
                        <a href="#" onClick={this.share} className="connect_with_facebook">
                            <h2>Psst! Cookies</h2>
                        </a>
                    </div>
                </div>
            </div>
            );
    },
    share: function () {
        FB.ui({
            method: 'share',
            href: 'http://86.124.87.229:5445/'
        }, function (response) {
        }.bind(this));
    },
    componentDidMount: function () {
        $('.login-box').addClass('animated swing');
    }
});

module.exports = React.createClass({
    getInitialState: function () {
        return {loggedIn: 'nothing', name: ''};
    },
    render: function () {
        var component = this.state.loggedIn === 'nothing' ? <div/> :
                this.state.loggedIn === 'connected' ? <loggedInContainer name={this.state.name} /> : <loginContainer login={this.login}/>
        return(
            <div id="login-page">
                <div className="container">
                    <div className="row">
                        <div className="logo-container">
                            <h1 className="text-center">iFlix</h1>
                        </div>
                    </div>
                {component}
                </div>
            </div>
            )
    },
    login: function () {
        FB.login(function (response) {
            this.setState({loggedIn: response.status});
            FB.api('/me', function (response) {
                this.setState({name: response.name});
            }.bind(this));
        }.bind(this), {scope: ''});
    },
    componentDidMount: function () {
        FB.getLoginStatus(function (response) {
            this.setState({loggedIn: response.status});
            FB.api('/me', function (response) {
                this.setState({name: response.name});
            }.bind(this));
        }.bind(this));
        $('.logo-container').addClass('animated bounceIn');
    }
});