var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = React.createClass({
	render: function() {
		return (
		<div id='cssmenu'>
			<ul>
			   <li class='active'><a href='index.html'><span>Home</span></a></li>
			   <li><a href='#'><span>Articles</span></a></li>
			   <li><a href='#'><span>About</span></a></li>
			   <li class='last'><a href='#'><span>Contact</span></a></li>
			</ul>
		</div>
		);
	}
})
