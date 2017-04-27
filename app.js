window.onload = function(){
	google.charts.load('current', {
	  packages: ['corechart', 'gauge']
	});
	google.charts.setOnLoadCallback(fillSalesTable);
}

function fillSalesTable(){
	var dataArray = [];
	var tempArray = ['Brand','Sales'];
	dataArray.push(tempArray);

	salesData = '{"SalesList":[' +
		'{"Brand":"BMW","Sales":"22.5"},' + 
		'{"Brand":"Benz","Sales":"20.5"},' + 
		'{"Brand":"Ferrari","Sales":"18.5"},' + 
		'{"Brand":"Audi","Sales":"16.5"},' + 
		'{"Brand":"Motor","Sales":"47.5"}]}';

	var obj = JSON.parse(salesData);
	var table = document.getElementById('salesTable');
	var tableRef = table.getElementsByTagName('tbody')[0];

	$(obj.SalesList).each(function(index, value){
		var row = tableRef.insertRow(tableRef.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);

		cell1.innerHTML = value.Brand;
		cell2.innerHTML = value.Sales;

		dataArray.push([value.Brand, parseInt(value.Sales)]);
	});

	drawChart(dataArray);
}

function drawChart(dataArray){
	var data = new google.visualization.arrayToDataTable(dataArray);
	var options = {
		title:'Sales By Model',
		is3D: true,
		backgroundColor: '#ddd',
		fontSize: 10,
		chartArea:{left: 10, top: 40, width:'100%', height: '100%'}
	};

	var chart = new google.visualization.PieChart(document.getElementById('pieChartArea'));
	alert("I am good to go.");
	chart.draw(data, options);
}
