require.config({
	paths: {
		jquery: ["http://code.jquery.com/jquery-2.1.3.min"]
	}
});

require([
	"jquery",
	"libs/chartjs/Chart",
	"js/ui"
	], function($, Chart, ui) {
		
		ui.initChart();
		var time = 0;

		setInterval(function() {
			ui.updateChart(time++);
		}, 1000);
		
	});