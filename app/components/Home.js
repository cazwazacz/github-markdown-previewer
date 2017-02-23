var React = require('react');
var styles = require('../styles');

function Home (props) {
	return (
      <div className="container">
        <div className="row">
        <div className="col-sm-6 form-group">
        <textarea
        className='form-control' 
        style={styles.textarea}
        placeholder="Type some text here..."
        onChange={props.onUpdateText}
        value={props.text}>
        </textarea>

        </div>
        <div 
        className="col-sm-6"
        style={styles.markdown}>
        {props.markdown}
        </div>
        </div>
      </div>
	)
}

module.exports = Home;
