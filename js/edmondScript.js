$(document).ready(function() {
	$("#aboutBtn").click(function () {
		$(".about").toggle();
		//plusminus1 = $("#expand").text();
		//if (plusminus1 === "+") {
		//	$("#expand").text("-");
		//} else {
		//	$("#expand").text("+");
		//}
	});
	
	$("#annualizedChk").click(function () {
		annOnOff = $("#annualizedOnOff").text();
		$("#fileFormatPerCut").toggle();
		$("#fileFormatPerYear").toggle();
		$("#prevYears").toggle();
		$("#prevCuts").toggle();
		$("#yearChk").toggle();
		$("#dateCutChk").toggle();
		if (annOnOff === "On") {
			$("#annualizedOnOff").text("Off");
		} else {
			$("#annualizedOnOff").text("On");
		}
	});
	
	$("#pretrainedBtn").click(function () {
		$(".pretrainedMode").toggle();
	});
	
	$("#trainTestSameBtn").click(function () {
		$(".trainTestSame").toggle();
	});
	
	$("#TDABtn").click(function () {
		$(".TDA").toggle();
	});
	
	$("#STDABtn").click(function () {
		$(".STDA").toggle();
	});
	
	$("#localSynthBtn").click(function () {
		$(".localSynth").toggle();
	});
});