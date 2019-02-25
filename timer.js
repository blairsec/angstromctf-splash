function setValue (name, value) {
	var node = document.getElementById(`value-${name}`)
	node.textContent = value
}

function setProgress (name, ratio) {
	node = document.getElementById(`progress-${name}`)
	node.style.strokeDashoffset = (1 - ratio) * 6.28 * 50
}

function step (timestamp) {
	var present = new Date()
	var competition = new Date(1553299200000)
	var delta = (competition - present) / 1000
	setValue('day', Math.floor(delta / 86400))
	setProgress('day', delta / 31536000)
	delta = delta % 86400
	setValue('hour', Math.floor(delta / 3600))
	setProgress('hour', delta / 86400)
	delta = delta % 3600
	setValue('minute', Math.floor(delta / 60))
	setProgress('minute', delta / 3600)
	delta = delta % 60
	setValue('second', Math.floor(delta))
	setProgress('second', delta / 60)
	window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)
