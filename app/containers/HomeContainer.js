var Home = require('../components/Home');
var Heading = require('../components/Heading');
var React = require('react');
var marked = require('marked');
var Parser = require('html-react-parser');

const html = '<h1 id="main-heading">Main Heading</h1> <h2 id="subheading">Subheading</h2> <h3 id="tiny-heading">Tiny heading</h3> <p>Text attributes <em>italic</em>, <strong>bold</strong>, <code>monospace</code>, <del>strikethrough</del> .</p> <p>Bulletpoints:</p> <ul> <li>ham</li> <li>eggs</li> <li>screwdriver</li> </ul> <p>Numbered list:</p> <ol> <li>first</li> <li>second</li> <li><p>third</p> <p>Made by <a href="https://github.com/cazwazacz/">Allan Wazacz</a></p> </li> </ol>';

var HomeContainer = React.createClass({
	getInitialState: function () {
      return {
      	markdown: ''
      }
	},
	handleText: function (e) {
      this.setState({
      	markdown: Parser(marked(e.target.value))
      })
	},
	render: function() {
		return (
			<div>
				<Heading />
				<Home 
				markdown={this.state.markdown}
				onUpdateText={this.handleText}/>
			</div>
		);
	}

});

module.exports = HomeContainer;