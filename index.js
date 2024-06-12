function cristmasCountDown() {
	const cristmasDate = new Date('December 25, 2024 00:00');
	const now = new Date();
	const diff = cristmasDate - now;
	console.log(diff);

	const msInSecond = 1000; //перевод в секунды
	const msInMinute = 60 * 1000; //перевод в минуты
	const msInHour = 60 * 60 * 1000; //перевод в часы
	const msInDay = 24 * 60 * 60 * 1000; //перевод в дни

	const displayDays = Math.floor(diff / msInDay); //матем.округляем до целого дня
	document.querySelector('.days').textContent = displayDays; //записываем в табличку 
	

	const displayHour = Math.floor((diff % msInDay) / msInHour);
	document.querySelector('.hours').textContent = displayHour; //записываем в табличку 
	

	const displayMinute = Math.floor((diff % msInHour) / msInMinute);
	document.querySelector('.minutes').textContent = displayMinute; //записываем в табличку 
	

	const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
	document.querySelector('.seconds').textContent = displaySecond; //записываем в табличку, но нет динамики

	if (diff <= 0) {
		document.querySelector('.days').textContent = 0; // убираем глюк
		document.querySelector('.hours').textContent = 0; //убираем глюк
		document.querySelector('.minutes').textContent = 0; //убираем глюк
		document.querySelector('.seconds').textContent = 0; //убмраем глюк
		clearInterval(timerID); //останавливаем таймер по переменной, иначе не остановится
		merryCristmas(); //вызов смены заголовк
	}

}
let timerID = setInterval(cristmasCountDown, 1000);//считаем каждую секунду

function merryCristmas() { //функция смены заголовка
	const heading = document.querySelector('h1');
	heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO";
	heading.classList.add("red"); //добавляем стиль из JS
}

const button = document.querySelector('#myButton'); //работаем с кнопкой, подслушка
button.addEventListener('click', function () {
	document.querySelector('#myAudio').play();
})