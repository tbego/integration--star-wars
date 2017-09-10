var followScrolling = {
	init: function () {
		function outerHeight(el) {
		  var height = el.offsetHeight;
		  var style = getComputedStyle(el);

		  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
		  return height;
		}

		var battlefront = document.querySelector('.battlefront'),
		    aside = document.querySelector('.battlefront aside'),
		    startPosition = battlefront.offsetTop,
		    stopPosition = document.querySelector('.stopHere').offsetTop - outerHeight(aside),
		    padding = 60;

		window.addEventListener('scroll', function() {
		    //stick aside to top of page
		    var y = this.scrollY;
		    var heightAndPadding = parseInt(document.querySelector('.battlefront aside').offsetHeight + padding *2);
		    if (y > startPosition) {
		        if (y + heightAndPadding < stopPosition) {
		            aside.style.marginTop = (y - startPosition).toString()+"px";
		        }
		    }
		});

	}
};

module.exports = followScrolling;
