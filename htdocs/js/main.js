(function() {

	// 1
	var icon1 = document.querySelector('.ani1');
	new mojs.Tween({
		repeat: 999,
		delay: 500,
		duration: 1500,
		onUpdate: function(progress) {
			var bounceProgress = mojs.easing.bounce.out(progress);
			icon1.style.transform = 'translateY(' + 200*bounceProgress + 'px)';
		}
	}).run();

	// 2
	var  icon2 = document.querySelector('.ani2');
	 new mojs.Tween({
	 	repeat: 999,
	 	duration: 900,
	 	onUpdate: function(progress) {
	 		var bounceProgress = mojs.easing.bounce.out(progress);
	 		icon2.style.transform = 'scale3d(' + bounceProgress + ',' + bounceProgress + ',1)';
	 	}
	 }).run();


})();