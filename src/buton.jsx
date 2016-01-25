var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <button onClick={this.props.whenClicked}  className="btn toggle-tickets" type="button">
      {this.props.value} Tickets
    </button>
  }
});
