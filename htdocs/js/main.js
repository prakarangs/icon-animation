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

	 // 3

	 var wrapper3 = document.querySelector('.wrapper3'),
	 	 icon3    = wrapper3.querySelector('.ani3'),
	 	 timeline3 = new mojs.Timeline(),

	 	 burst3 = new mojs.Burst({
	 	 	parent: wrapper3,
	 	 	repeat: 999,
	 	 	duration: 1500,
			shape : 'circle',
			fill : [ '#FE4C4A', '#FE4C4A', '#FE4C4A', '#FE4C4A', '#FE4C4A', '#FE4C4A' ],
			x: '26%',
			y: '50%',
			opacity: 0.6,
			// childOptions: { radius: {10:0} },
			// radius: {40:120},
			count: 6,
			isSwirl: true,
			isRunLess: true,
			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
		}),
	 	 tween3 = new mojs.Tween({
	 	 	repeat: 999,
	 	 	duration: 1500,
	 	 	onUpdate: function(progress) {
	 	 		var bounceProgress3 = mojs.easing.bounce.out(progress);
	 			icon3.style.transform = 'scale3d(' + bounceProgress3 + ',' + bounceProgress3 + ',1)';
	 	 	}
	 	 });
	 	 timeline3.add(burst3,tween3).start();

	 	 // when clicking the button start the timeline/animation:
		// wrapper3.addEventListener('mousedown', function() {
		// 	timeline3.start();
		// });

})();