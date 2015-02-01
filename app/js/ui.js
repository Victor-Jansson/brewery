define(["libs/chartjs/Chart", "js/api"], function(Chart, api) {	
	var myLineChart;

	Chart.defaults.global.animation = false;
	Chart.defaults.global.responsive = true;

	function initChart(func){
		var ctx = $("#myChart").get(0).getContext("2d");	
		api.getFullGraph(function(data) {
			myLineChart = new Chart(ctx).Line(data, 
				{scaleOverride: true, 
					scaleStartValue: 0, 
					scaleStepWidth: 1, 
					scaleSteps: 30, 
					pointDot: false,
					showTooltips: false,
				});

			return func();
		});
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