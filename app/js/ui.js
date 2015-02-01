define(["libs/chartjs/Chart", "js/api"], function(Chart, api) {	
	var myLineChart;

	var chartOptions = {
		animation: false,
		responsive: true,

		pointDot: false,
		showTooltips: false,

	}
	
	function initChart(func){
		var ctx = $("#myChart").get(0).getContext("2d");	
		
		api.getFullGraph(function(data) {
			myLineChart = new Chart(ctx).Line(data, chartOptions);

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