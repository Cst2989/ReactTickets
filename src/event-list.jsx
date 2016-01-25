var React = require('react');
var Event = require('./event');

module.exports = React.createClass({
  render: function() {
    var list = this.props.eventData.map(function(eventProps){
      return <Event {...eventProps} />
    });

    return <div>
      {list}
    </div>
  }
});
