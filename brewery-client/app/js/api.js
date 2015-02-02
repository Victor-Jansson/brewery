define([], function() {
	function getFullGraph(func) {
		return func({	
    	labels: ['', '', '', '', '', '', '', '', '', ''],
    	datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 5, 10, 12, 12, 12 ,12 ,12 ,12 ,12]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0],

        }
    	]
    });
	}

	function getLatestPoints(func) {
		$.ajax( {
			type: "GET",
			url: "http://kanqin-backend.nodejitsu.com:80/?query=1",
			contentType: "application/json",
			data: "",
			dataType: "text",
			success: function(response) {
				pos = JSON.parse(response);
				var value = [pos[0] % 25, pos[1] % 25 +100];
				
				return func(value);
			}
    });
	}

	return {
		getFullGraph: getFullGraph,
		getLatestPoints: getLatestPoints
	}
})