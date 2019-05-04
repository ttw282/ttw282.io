var lang = "en";

function btnClick() {
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

function changeLang() {
    lang = lang == "en" ? "zh" : "en";

    if (lang == "en") {
        $('#title').text('去美国加油划算吗？');
        $('#changelangbtn').html('Switch to English');
        $('.dontknow').text("Don't know!");
        $('#dollarperlitre').text('$ per litre');
        $('#cad').text('CAD');
        $('#canadaprice').attr('placeholder', 'Price in Canada');
        $('#dollarpergallon').text('$ per gallon');
        $('#usd').text('USD');
        $('#usprice').attr('placeholder', 'Price in the US');
        $('#distance').attr('placeholder', 'Distance from US gas station');
        $('#km').text('km');
    } else if (lang == "zh") {
        $('#title').text('Is it worth the trip to the US for gas?');
        $('#changelangbtn').html('换中文版');
        $('.dontknow').text("不知道！");
        $('#dollarperlitre').text('每升几刀');
        $('#cad').text('加币');
        $('#canadaprice').attr('placeholder', '加拿大油价');
        $('#dollarpergallon').text('每加仑几刀');
        $('#usd').text('美金');
        $('#usprice').attr('placeholder', '美国油价');
        $('#distance').attr('placeholder', '离美国加油站多远');
        $('#km').text('公里');
    }
}