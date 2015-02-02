define(["jquery", "knockout"], function($, ko) {
	var viewModel = {
		navigation: {
			activePage = ko.observable(1)
		}
	}

	function initKnockout() {
		ko.applyBindings(viewModel);	
	}
	

})