require.config({
	shim : {
        "bootstrap" : { "deps" :['jquery'] }
  },
	paths: {
		jquery: ["http://code.jquery.com/jquery-2.1.3.min"],
		knockout: ["http://cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min"],
		bootstrap: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min"]
	}
});

require([
	"jquery",
	"knockout",
	"bootstrap",
	"libs/chartjs/Chart",
	"js/ui",
	"js/viewModel"
	], function($, ko, bootstrap, Chart, ui, viewModel) {

		viewModel.initKnockout();
		viewModel.initModals();

		setInterval(ui.getServerStatus(), 10000); //Check status every 10s sec

		ui.initChart(function() {

			// Intervallic update of chart after init
			setInterval(function() {
				ui.updateChart();
			}, 3000);
		});


	});
