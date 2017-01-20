heart_container = document.getElementById 'heart-container'
heart_checkbox = heart_container.querySelector 'input'

heart_tweens = [
	new mojs.Shape({
		parent: heart_container,
		left: '50%', top: '48%',
		radius: { 10: 65 },
		fill: 'transparent',
		stroke: { '#F57C00': '#D32F2F' },
		strokeWidth: { 30: 0 },
		duration: 800,
		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
	}),
	new mojs.Burst({
		parent: heart_container,
		left: '50%', top: '48%',
		radius: { 40: 110 },
		count: 6,
		children: {
			shape: 'line',
			fill: 'white',
			radius: { 30: 0 },
			scale: 1,
			stroke: {'#FFA000': '#E91E63'},
			strokeWidth: 2,
			duration: 650,
			delay: 200,
			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
		}
	}),
	new mojs.Burst({
		parent: heart_container,
		left: '50%', top: '48%',
		radius: { 20: 100 },
		angle: 30,
		count: 6,
		children: {
			shape: 'circle',
			fill: {'#E91E63': '#FFA000'},
			radius: { 30: 0 },
			scale: 1,
			strokeWidth: 2,
			duration: 1200,
			delay: 250,
			easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
		}
	})
]

heart_timeline = new mojs.Timeline({ speed: 1 })
heart_timeline.add(heart_tweens)
heart_checkbox.addEventListener 'click', (e) ->
	if heart_checkbox.checked
		heart_timeline.replay()

