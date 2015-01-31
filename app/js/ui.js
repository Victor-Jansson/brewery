define(["libs/chartjs/Chart", "js/api"], function(Chart, api) {	
	var myLineChart;

	Chart.defaults.global.animation = false;
	Chart.defaults.global.responsive = false;

	function initChart(){
		var ctx = $("#myChart").get(0).getContext("2d");	
		var data = api.getFullGraph();

		myLineChart = new Chart(ctx).Line(data, {scaleOverride: true, scaleStartValue: 0, scaleStepWidth: 1, scaleSteps: 30});
	}

	function updateChart() {

		api.getLatestPoints(function(data) {
			myLineChart.addData(data, '');	
		});
	}

	return {
		initChart: initChart,
		updateChart: updateChart
	}

	
});