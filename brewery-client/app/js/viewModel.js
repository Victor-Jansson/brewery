define(["jquery", "knockout", "js/ui"], function($, ko, ui) {
	var viewModel = {
		activePage: ko.observable(1),
		settings: ko.observableArray(),
		server: {
			status: ko.observable('N/A')
		},

		modal: {
			askForTemp: function() {
				$('#tempAndTimeModal').modal();
				viewModel.modal.showTimeInput(false);
				viewModel.modal.showTempInput(true);
				$("#tempInput").focus().select();
			},
			askForTime: function() {
				viewModel.modal.showTempInput(false);
				viewModel.modal.showTimeInput(true);
				$("#timeInput").focus().select();
			},
			storeRow: function() {
				$('#tempAndTimeModal').modal('hide');
				storeRow();
			},
			temporalTemp: ko.observable(),
			temporalTime: ko.observable(),
			showTempInput: ko.observable(false),
			showTimeInput: ko.observable(false)
		},

		addRow: function() {
			addRow();
		},
		deleteRow: function(index) {
			deleteRow(index);
		},
		setActivePage: function(number) {
			viewModel.activePage(number);
		}
	}

	function storeRow() {
		viewModel.settings.push({temp: viewModel.modal.temporalTemp(), time: viewModel.modal.temporalTime()});
	}

	function deleteRow(index) {
		viewModel.settings.splice(index, 1);
	}

	function initKnockout() {
		ko.applyBindings(viewModel);
	}

	function initModals() {
		$("#tempInput").keyup(function(event){
    	if(event.keyCode == 13){
        $("#tempOkBtn").click();
    	}
		});

		$("#timeInput").keyup(function(event){
    	if(event.keyCode == 13){
        $("#timeOkBtn").click();
    	}
		});
	}

	function setServerStatus(status) {
		viewModel.server.status(status);
	}
	
	return {
		initKnockout: initKnockout,
		initModals: initModals,
		setServerStatus: setServerStatus
	}

})
