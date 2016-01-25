var React = require('react');

module.exports = React.createClass({
  render: function() {
    return  <ul className="list-unstyled">
    <li>
    <div className="ticket">
    <h5>Basic Ticket<br/>
    <small>25 Tickets left</small>
    </h5>
    </div>
    <div className="price">
    <div className="value"><b>$</b>199</div>
    </div>
    <a href="#" className="btn btn-info btn-sm btn-buy">Buy Now!</a>
    </li>
    <li>
    <div className="ticket">
    <h5>Regular Ticket<br/>
    <small>15 Tickets left</small>
    </h5>
    </div>
    <div className="price">
    <div className="value"><b>$</b>799</div>
    </div>
    <a href="#" className="btn btn-info btn-sm btn-buy">Buy Now!</a>
    </li>
    <li>
    <div className="ticket">
    <h5>Premium Ticket<br/>
    <small>62 Tickets left</small>
    </h5>
    </div>
    <div className="price">
    <div className="value"><b>$</b>1,299</div>
    </div>
    <a href="#" className="btn btn-info btn-sm btn-buy">Buy Now!</a>
    </li>
    <li>
    <div className="ticket">
    <h5>VIP Ticket<br/>
    <small>6 Tickets left</small>
    </h5>
    </div>
    <div className="price">
    <div className="value"><b>$</b>1,799</div>
    </div>
    <a href="#" className="btn btn-info btn-sm btn-buy">Buy Now!</a>
    </li>
    </ul>
  }
});
