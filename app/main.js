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
		
		ui.initChart(function() {
			
			// Intervallic update of chart after init
			setInterval(function() {
				ui.updateChart();
			}, 3000);	
		});

		
	});