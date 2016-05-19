$(document).ready(function(){
	console.log("BookYourStudy.com");

	function timer() {
		let $secLow = $(".second_low"),
			$secHigh = $(".second_high"),
			$minLow = $(".minute_low"),
			$minHigh= $(".minute_high"),
			$hourLow = $(".hour_low"),
			$hourHigh = $(".hour_high"),
			$dayLow = $(".day_low"),
			$dayHigh = $(".day_high"),
			sL = $secLow.text(),
			sH = $secHigh.text(),
			mL = $minLow.text(),
			mH = $minHigh.text(),
			hL = $hourLow.text(),
			hH = $hourHigh.text(),
			dL = $dayLow.text(),
			dH = $dayHigh.text();

		
		var time = setInterval( function() {			
			sL--;
			if (sL === -1) {
				sL = 9;
				sH--
			}
			if (sH === -1) {
				sH = 5;
				mL--;

			}
			if (mL === -1) {
				mL = 9;
				mH--;
			}
			if (mH === -1) {
				mH = 5;
				hL--;
			}
			if (hL === -1 && hH == 0) {
				hL = 3;
				hH = 2;
				dL--;
			}
			else if (hL === -1 && hH !== 0) {
				hL = 9;
				hH--;
			}
			if (dL === -1) {
				dL = 9;
				dH--
			}
			if (dH === -1) {
				dH = 0;
				clearInterval(time);
				return;
			}

			$secLow.text(sL);
			$secHigh.text(sH);
			$minLow.text(mL);
			$minHigh.text(mH);
			$hourLow.text(hL);
			$hourHigh.text(hH);
			$dayLow.text(dL);
			$dayHigh.text(dH);
			
		}, 1000)
	}

	timer();
});