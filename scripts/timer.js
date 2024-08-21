'use strict';

const TimerApp = {
	remaining: 0,
	clock: document.getElementById( 'app' ),
	date: document.getElementById( 'title' ),
	clockD: document.getElementById( 'days' ),
	clockH: document.getElementById( 'hours' ),
	clockM: document.getElementById( 'minutes' ),
	clockS: document.getElementById( 'seconds' ),
	tick: false,
	init() {
		this.checkTimer();
		setInterval( () => {
			this.checkTimer();
		}, 1000 );
	},
	checkTimer() {
		const time1 = new Date();
		const time1ms = time1.getTime( time1 );
		const time2 = new Date( 2024, 7, 26, 15, 0 );
		const time2ms = time2.getTime( time2 );
		const difference = time2ms - time1ms;
		const days = Math.floor( difference / 36e5 / 24 );
		const hours = Math.floor( difference / 36e5 - days * 24 );
		const minutes = Math.floor( difference % 36e5 / 60000 );
		const seconds = Math.floor( difference % 60000 / 1000 );


		this.date.innerHTML = `${ time2.toString().replace(' GMT+0200 (South Africa Standard Time)', '') }`;
		this.clockD.innerHTML = `${ 10 > days ? '0' : '' }${ days }`;
		this.clockH.innerHTML = `${ 10 > hours ? '0' : '' }${ hours }`;
		this.clockM.innerHTML = `${ 10 > minutes ? '0' : '' }${ minutes }`;
		this.clockS.innerHTML = `${ 10 > seconds ? '0' : '' }${ seconds }`;

	}

};

window.addEventListener( 'load', () => {
	TimerApp.init();
} );
