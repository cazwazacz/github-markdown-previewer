var React = require('react');
var styles = require('../styles')

function Heading (props) {
	return (
		<div className="container">
			<div style={styles.headingMargin} className="row text-center">
				<div>
		          <h1>Github-Flavoured Markdown Previewer</h1>	
				</div>
			</div>
		</div>
	)
}

module.exports = Heading;