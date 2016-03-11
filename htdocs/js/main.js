(function() {

	// 1
	// var iconHeart = document.querySelector('.fa-heart');
	// new mojs.Tween({
	// 	repeat: 1,
	// 	delay: 500,
	// 	duration: 1500,
	// 	onUpdate: function(progress) {
	// 		var bounceProgress = mojs.easing.bounce.out(progress);
	// 		iconHeart.style.transform = 'translateY(' + 200*bounceProgress + 'px)';
	// 	}
	// }).run();

	// 2
	var  icon    = document.querySelector('.ani2');
	 new mojs.Tween({
	 	repeat: 999,
	 	duration: 900,
	 	onUpdate: function(progress) {
	 		var bounceProgress = mojs.easing.bounce.out(progress);
	 		icon.style.transform = 'scale3d(' + bounceProgress + ',' + bounceProgress + ',1)';
	 	}
	 }).run();


})();