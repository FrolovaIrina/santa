function cristmasCountDown() {
	const cristmasDate = new Date('December 25, 2024 00:00');
	const now = new Date();
	const diff = cristmasDate - now;
	console.log(diff);

	const msInSecond = 1000; 
	const msInMinute = 60 * 1000; 
	const msInHour = 60 * 60 * 1000;
	const msInDay = 24 * 60 * 60 * 1000; 

	const displayDays = Math.floor(diff / msInDay); 
	document.querySelector('.days').textContent = displayDays; 
	

	const displayHour = Math.floor((diff % msInDay) / msInHour);
	document.querySelector('.hours').textContent = displayHour; 
	

	const displayMinute = Math.floor((diff % msInHour) / msInMinute);
	document.querySelector('.minutes').textContent = displayMinute; 
	

	const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
	document.querySelector('.seconds').textContent = displaySecond; 

	if (diff <= 0) {
		document.querySelector('.days').textContent = 0; 
		document.querySelector('.hours').textContent = 0; 
		document.querySelector('.minutes').textContent = 0; 
		document.querySelector('.seconds').textContent = 0; 
		clearInterval(timerID); 
		merryCristmas();
	}

}
let timerID = setInterval(cristmasCountDown, 1000);

function merryCristmas() { 
	const heading = document.querySelector('h1');
	heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO";
	heading.classList.add("red"); 
}

const button = document.querySelector('#myButton'); 
button.addEventListener('click', function () {
	document.querySelector('#myAudio').play();
})
