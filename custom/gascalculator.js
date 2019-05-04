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

    if (lang == "en") {
        result += "Total spent fueling in Canada: $" + totalspentincanada.toFixed(2) + " CAD<br/>";

        result += "Total spent fueling in US: $" + totalspentinus.toFixed(2) + " CAD<br/>";

        result += "Total savings: $" + (totalspentincanada - totalspentinus).toFixed(2) + " CAD<br/>";

        result += "It's as if you were working for $" + ((totalspentincanada - totalspentinus) / (minutes * 2 / 60)).toFixed(2) + " CAD per hour!";
    } else if (lang == "zh") {
        result += "在加拿大加油的总费用: $" + totalspentincanada.toFixed(2) + " 加币<br/>";

        result += "在美国加油的总费用: $" + totalspentinus.toFixed(2) + " 加币<br/>";

        result += "总共节省: $" + (totalspentincanada - totalspentinus).toFixed(2) + " 加币<br/>";

        result += "相当于您每小时赚 $" + ((totalspentincanada - totalspentinus) / (minutes * 2 / 60)).toFixed(2) + " 加币！";
    }

    $('#result').html(result);
}

function changeLang() {
    lang = lang == "en" ? "zh" : "en";

    if (lang == "en") {
        $('head title', window.parent.document).text('Is it worth the trip to the US for gas?');
        $('#title').text('Is it worth the trip to the US for gas?');
        $('.dontknow').text("Don't know!");
        $('#dollarperlitre').text('$ per litre');
        $('#cad').text('CAD');
        $('#canadaprice').attr('placeholder', 'Price in Canada');
        $('#dollarpergallon').text('$ per gallon');
        $('#usd').text('USD');
        $('#usprice').attr('placeholder', 'Price in the US');
        $('#distance').attr('placeholder', 'Distance from US gas station');
        $('#km').text('km');
        $('#fueleconomy').attr('placeholder', 'Avg. fuel economy');
        $('#litreper100km').text('Litres/100 km');
        $('#litrestobuy').attr('placeholder', 'Litres of fuel you need to buy');
        $('#litres').text('Litres');
        $('#minutes').attr('placeholder', 'Approx. time driving one way');
        $('#mins').text('mins');
        $('#howmany').text('How many');
        $('#exchangerate').attr('placeholder', 'USD');
        $('#equalsonecad').text('= 1 CAD');
        $('#calcbtn').html('Is it worth it?');
        $('#pleasesupport').text('Please support the making of more apps like these!');
    } else if (lang == "zh") {
        $('head title', window.parent.document).text('去美国加油划算吗？');
        $('#title').text('去美国加油划算吗？');
        $('.dontknow').text("不知道！");
        $('#dollarperlitre').text('每升几刀');
        $('#cad').text('加币');
        $('#canadaprice').attr('placeholder', '加拿大油价');
        $('#dollarpergallon').text('每加仑几刀');
        $('#usd').text('美金');
        $('#usprice').attr('placeholder', '美国油价');
        $('#distance').attr('placeholder', '离美国加油站多远');
        $('#km').text('公里');
        $('#fueleconomy').attr('placeholder', '平均汽油耗量');
        $('#litreper100km').text('升/百公里');
        $('#litrestobuy').attr('placeholder', '要买多少升油');
        $('#litres').text('升');
        $('#minutes').attr('placeholder', '单程开车时间');
        $('#mins').text('分钟');
        $('#howmany').text('多少');
        $('#exchangerate').attr('placeholder', '美金');
        $('#equalsonecad').text('等于1加币');
        $('#calcbtn').html('划算吗？');
        $('#pleasesupport').text('请支持我开发类似这样的工具！');
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(document).ready(function () {
    var lang = getUrlParameter('lang');
    if (lang == "zh") {
        $('#changelangbtn').click();
    }
});