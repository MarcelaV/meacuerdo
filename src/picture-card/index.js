var yo = require('yo-yo');
var moment = require('moment');
var translate = require('../translate');

module.exports = function pictureCard(pic) {
	var el;

	function render(picture) {
		return yo`<div class="card ${picture.liked ? 'liked' : ''}">
	    	<div class="card-image">
	      		<img class="activator" src="${pic.url}">
	    	</div>
	    	<div class="card-content">
	      		<a href="/user/${pic.user.username}" class="card-title">
					<img src="${pic.user.avatar}" class="avatar">
					<span class="username">${pic.user.username}</span>
	      		</a>
				<small class="right time">${translate.date.format(picture.createdAt)}</small>
				<p>
					<a class="left" href="#" onclick=${like}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
					<a class="left" href="#" onclick=${dislike}><i class="fa fa-heart" aria-hidden="true"></i></a>
					<span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
				</p>
	    	</div>
	  	</div>`
	}

  	function like(){
  		pic.liked = true;
  		pic.likes++;
  		var newEl = render(pic);
  		yo.update(el, newEl);
  		return false;
  	}

  	function dislike(){
  		pic.liked = false;
  		pic.likes--;
  		var newEl = render(pic);
  		yo.update(el, newEl);
  		return false;
  	}

  	el = render(pic);
  	return el;
}
