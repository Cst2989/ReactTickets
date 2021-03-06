var React = require('react');
var Button = require('./buton');
var List = require('./list');

module.exports = React.createClass({
  handleClick: function() {
    this.setState({active: !this.state.active});
  },
  getInitialState: function(){
    return { active: this.props.active }
  },
  render: function() {
    return <div className="col-lg-4 col-md-6 col-sm-6">
    <div className={"ticket-card " + (this.state.active ? "active" :"")}>
    <div className="cover">
    <img src={this.props.imageUrl} alt="" />
    <div className="info">
    <div className="going">
    <i className="fa fa-group"></i> {this.props.going} Going
    </div>
    <div className="tickets-left">
    <i className="fa fa-ticket"></i> {this.props.left} Tickets Left
    </div>
    </div>
    </div>
    <div className="body">

    <div className="artist">
    <h6 className="info">{this.props.tour}</h6>
    <h4 className="name">{this.props.title}</h4>
    </div>
    <div className="price">
    <div className="from">From</div>
    <div className="value">
    <b>$</b>{this.props.price}
    </div>
    </div>

    <div className="clearfix"></div>
    <div className="info">
    <p className="location">
    <i className="fa fa-map-marker"></i> {this.props.location}
    </p>
    <p className="date">
    <i className="fa fa-calendar"></i> {this.props.date}
    </p>
    </div>
    <div className="clearfix"></div>
    </div>
    <div className={"collapse" + (this.state.active ? "in" :"")}>
    <List />
    </div>
    <div className="footer">
    <Button whenClicked={this.handleClick} value={(this.state.active ? "Hide" :"Show")}  />
    </div>
    </div>
    </div>
  }
});
