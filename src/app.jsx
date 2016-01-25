var React = require('react');
var EventList = require('./event-list');

var options = {
  eventData:  [{
    title: 'The Weeknd',
    price: 599,
    location: 'Barcelona, Spain',
    date: '30 Aug, 2016',
    going:4234,
    left:240,
    tour:'GLOBAL TOUR 2016',
    imageUrl: 'http://s28.postimg.org/p916fev0t/week.jpg',
    active : false
  },{
    title: 'Kanye West',
    price: 699,
    location: 'Dallas, Texas',
    date: '30 Aug, 2017',
    going:4234,
    left:241,
    tour:'YEEZUS WORLDWIDE',
    imageUrl: 'http://s28.postimg.org/iu25iqob1/kanye.jpg',
    active : true
  },{
    title: 'Drake',
    price: 499,
    location: 'Paris, France',
    date: '20 Aug, 2016',
    going:4231,
    left:243,
    tour:'TRUST ISSUES TOUR',
    imageUrl: 'http://s28.postimg.org/wmgkedf2l/drake.jpg',
    active: false
  }]
};


var element = React.createElement(EventList, options);
React.render(element, document.querySelector('.row'));
