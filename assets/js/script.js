console.log("%c=== lev1_1 new Date() ===", "color: red");

// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.
// Speichere die Werte in einer Variable (date1, date2, …)
let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

result1_1.innerHTML =
	date1 +
	" = new Date('September 2, 2019 09:00:00')" +
	"<br>" +
	date2 +
	" = new Date(0)" +
	"<br>" +
	date3 +
	" = new Date(31556908800)" +
	"<br>" +
	date4 +
	" = new Date(86400000)";

console.log("%c=== lev1_2  Date methods ===", "color: red");
// In dieser Übung lernen wir die Date Methods
let monate = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

let wochenTag = [
	"Sonntag",
	"Montag",
	"Dienstag",
	"Mittwoch",
	"Donnerstag",
	"Freitag",
	"Samstag",
];

let datum = new Date();
result1_2.innerHTML =
	datum +
	"<br>" +
	datum.getFullYear() +
	"<br>" +
	(datum.getMonth() + 1) +
	" Monat" +
	"<br>" +
	datum.getDate() +
	" Tag" +
	"<br>" +
	datum.getHours() +
	" Stunden" +
	"<br>" +
	datum.getMinutes() +
	" Minuten" +
	"<br>" +
	wochenTag[datum.getDay()] +
	"<br>" +
	monate[datum.getMonth()];

// Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein.

let displayUhr = document.getElementById("result1_2_clock");

// setInterval(function uhrzeit() {
// 	displayUhr.innerHTML =
// 		wochenTag3 +
// 		" " +
// 		("0" + stunden).slice(-2) +
// 		" : " +
// 		("0" + minuten).slice(-2) +
// 		" : " +
// 		("0" + sekunden).slice(-2);
// }, 1000);

// uhrzeit()

setInterval(uhrzeit, 1000);
function uhrzeit() {
	let datum = new Date();
	let wochenTag3 = wochenTag[datum.getDay()].substring(0, 2);
	let stunden = datum.getHours();
	let minuten = datum.getMinutes();
	let sekunden = datum.getSeconds();
	displayUhr.innerHTML =
		wochenTag3 +
		" " +
		("0" + stunden).slice(-2) +
		" : " +
		("0" + minuten).slice(-2) +
		" : " +
		("0" + sekunden).slice(-2);
}

console.log("%c=== lev1_5  Monatsname ===", "color: red");
// Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
function monatsName(x) {
	let datum1 = new Date(x);
	monate[datum1.getMonth()];
	console.log(monate[datum1.getMonth()]);
}
monatsName("2001,3,4"); // März
monatsName("2019,12,24"); // Dezember
monatsName("1410,07,15"); // Juli

console.log("%c=== lev1_6 AM PM ===", "color: red");
// Schreibe eine Funktion, um AM und PM zu erhalten.
// Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
// Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

function amOrPm(b) {
	if (b.getHours() < 12) {
		console.log("AM");
	} else {
		console.log("PM");
	}
}
amOrPm(date1);
amOrPm(date2);
amOrPm(date3);
amOrPm(date4);

console.log("%c=== lev1_7 Weekend ===", "color: red");
// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.

/* Nutze:
Conditionals Statement
Comparison Operators
Funktion mit einem Parameter
Aktuelles Datum
getDay()
return "Weekend"
return "Arbeitstag" */

function istWochenende(w) {
	let datum3 = new Date(w);
	console.log(datum3);

	if (datum3.getDay() === 0 || datum3.getDay() > 5) {
		return console.log("weekend");
	} else {
		return console.log("go to work");
	}
}
istWochenende("12,7,2019"); // weekend
istWochenende("2001,2,16"); // weekday
istWochenende("2020,1,2"); // weekday
istWochenende("2020,2,29"); // weekend

console.log("%c=== lev1_9 Clock ===", "color: red");
// Schreibe eine Funktion startTime(), die die aktuelle Uhrzeit anzeigt.
// setInterval(myTimer, 1000);

// function myTimer() {
// 	const date = new Date();
// 	document.getElementById("txt").innerHTML = date.toLocaleTimeString();
// }

let displayClock1_9 = document.getElementById("txt");

setInterval(startTime, 1000);

function startTime() {
	let heute = new Date();
	let std = heute.getHours();
	let min = heute.getMinutes();
	let sec =
		heute.getSeconds() < 10 ? "0" + heute.getSeconds() : heute.getSeconds();
	let wochentag = wochenTag[heute.getDay()];
	let tag = heute.getDate();
	let monat = monate[heute.getMonth()].slice(0,3);
	let jahr = heute.getFullYear();

	// displayClock1_9.innerHTML = std + " : " + min + " : " + sec;
	displayClock1_9.innerHTML = `<span class="zifferGross">${std}:${min}</span><span class="zifferMittel">${sec}<span><br><span class="zifferKlein">${wochentag}<span><br><span class="zifferKlein">${tag}/${monat}/${jahr}<span>`;
}
