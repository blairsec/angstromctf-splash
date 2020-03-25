function setValue (name, value) {
	var node = document.getElementById('value-'+name)
	node.textContent = value
}

function setClass (name, c){
	var node = document.getElementById(name)
	node.classList = c
}

function setProgress (name, ratio) {
	node = document.getElementById('progress-'+name)
	node.setAttribute('stroke-dashoffset', (1 - ratio) * 6.28 * 50)
}


function step (timestamp) {
	var present = new Date()
	
	var delta;
	
	var competitionStart = Date.parse("2020-03-13T20:00:00.000-04:00"),
		competitionEnd = Date.parse("2020-03-18T20:00:00.000-04:00")
	
	
	if (competitionEnd - present < 0){
		// actf ended
		document.getElementById("timer").remove()
		
		setClass("push", "dib mb3")
		
		return
		
	} else if (competitionStart - present < 0){
		// actf is going on
		delta = (competitionEnd - present) / 1000
		
	} else {
		// actf has not started
		delta = (competitionStart - present) / 1000
	}
	
	delta = delta > 0 ? delta : 0
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





