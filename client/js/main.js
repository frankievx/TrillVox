var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar.js');
var articles = [];

var fetchArticles = function() {
	$.ajax({
	method: "GET",
	url: "/articles",
	success: function(data) {
		articles = data.results
		console.log(articles);
		renderArticles();
	}
	})
}

var NavBar = React.createClass({
	render: function() {
		return (
		<div id='cssmenu'>
			<ul>
			   <li className='active'><a href='index.html'><span>Home</span></a></li>
			   <li><a href='#'><span>Articles</span></a></li>
			   <li><a href='#'><span>About</span></a></li>
			   <li className='last'><a href='#'><span>Contact</span></a></li>
			</ul>
		</div>
		);
	}
})
var ArticleArtist = React.createClass({
	render: function() {
		return (
			<div className='articleArtist'>
				<h2> {this.props.artist} </h2>
			</div>
			)
	}
})

var ArticleTitle = React.createClass({
	render: function() {
		return (
				<div className='articleTitle'>
					<h3> "{this.props.title}" </h3>
				</div>
			)
	}
})

var ArticleText = React.createClass({
	render: function() {
		return (
			<div className='articleText'>
				<p> {this.props.text} </p>
			</div>
		);
	}
})

var SCwidget = React.createClass({
	render: function() {
		// console.log('widget', SC.Widget);
		return (
			<div className='player'>
			<iframe id={this.props.article._id} width="75%" height="300" scrolling="no" frameborder="no" src={this.props.source + '&enable_api=true&single-active=true'}></iframe>
			</div>
		)
	}
})

var Article = React.createClass({
	// componentDidMount: function() {
 //    window.addEventListener('onmouseenter', function(event) {
 //    	console.log(event.currentTarget);
 //    });
	// },

	// componentWillUnmount: function() {
	//   window.removeEventListener('mouseout', this.play);
	// },

	play: function(event) {
		var iframeElement = document.getElementById(this.props.article._id);
		var widget = SC.Widget(iframeElement);
		widget.play();
	},

	render: function() {
		var backgroundStyle = {
			backgroundImage: 'url('+this.props.article.backgroundsrc+')'
		}
		return (
			<div style={backgroundStyle} className='articleBackground' onMouseEnter={this.play}>
			<div className="article">

				<ArticleArtist artist={this.props.article.artist}/>
				<ArticleTitle title={this.props.article.title}/>
				<ArticleText text={this.props.article.text}/>
				<SCwidget article = {this.props.article} source={this.props.article.source}/>
				<hr></hr>
			</div>
			</div>
			)
	}
});



var ArticleList = React.createClass({
	render: function() {
		return (
			<div className='articleList'>
				{this.props.articles.map(function(article) {
					return (
						<Article article={article}/>
					)
				})}
			</div>
			)
	}
})




function renderArticles() {
	ReactDOM.render(
	  <ArticleList key={articles._id} articles={articles}/>,
	  document.getElementById('article-mount')
	);
};

fetchArticles();



