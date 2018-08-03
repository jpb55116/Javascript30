/* Get our elements */ 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')



/* Build function */ 
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() { 
	const icon = this.paused ? 'play':'paused';
	toggle.textContent = icon;
	console.log('Update the Button');
}

function skip() {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
	video[this.name] = this.value;
	console.log(this.name);
	console.log(this.value);
}

/* Hook up the event listener */
video.addEventListener('click', togglePlay);
toggle.addEventListener('play', togglePlay);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button =>button.addEventListener('click', skip);
ranges.forEach(range => range.addEventListener('click', handleRangeUpdate));