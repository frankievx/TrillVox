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

var SCwidget = Reach.createClass({
	render: function() {
		return (
				<script src="https://w.soundcloud.com/player/api.js" type="text/javascript"></script>
			)
	}
})


ReactDOM.render(
  <NavBar />,
  document.getElementById('app-container')
);