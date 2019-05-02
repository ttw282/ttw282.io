function btnClick(){
					var canadaprice = $('#canadaprice').val();
					var usprice = $('#usprice').val();
					var distance = $('#distance').val();
					var fueleconomy = $('#fueleconomy').val();
					var exchangerate = $('#exchangerate').val();
					var litrestobuy = $('#litrestobuy').val();
					var minutes = $('#minutes').val();
					var result = "";

					var convertedusprice = usprice / exchangerate / 3.78541;
					
					var totalspentincanada = canadaprice * litrestobuy;
					
					var usgascost = convertedusprice * litrestobuy;
					var usdrivingcost = ((distance * 2) * fueleconomy / 100 * convertedusprice);
					var totalspentinus = usgascost + usdrivingcost;
										
					result += "Total spent fueling in Canada: $" + totalspentincanada.toFixed(2) + " CAD<br/>";
					
					result += "Total spent fueling in US: $" + totalspentinus.toFixed(2) + " CAD<br/>";
					
					result += "Total savings: $" + (totalspentincanada - totalspentinus).toFixed(2) + " CAD<br/>";
					
					result += "It's as if you were working for $" + ((totalspentincanada - totalspentinus) / (minutes * 2 / 60)).toFixed(2) + " CAD per hour!";
					
					$('#result').html(result);
				}