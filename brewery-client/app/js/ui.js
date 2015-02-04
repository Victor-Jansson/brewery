define(["libs/chartjs/Chart", "js/api", "js/viewModel"], function(Chart, api, viewModel) {
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

	function getServerStatus() {
		api.getServerStatus(function(res) {
			viewModel.setServerStatus(res);
		})
	}

	function getMyLineChart() {
		return myLineChart;
	}

	return {
		initChart: initChart,
		updateChart: updateChart,
		getMyLineChart: getMyLineChart,
		getServerStatus: getServerStatus
	}

});
