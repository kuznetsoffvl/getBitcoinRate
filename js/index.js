var prvRate = 0;

function getBitcoinRate() {
  $.get(
    url = "https://api.coindesk.com/v1/bpi/currentprice.json", (response)=> {    
    let obj = JSON.parse(response);
    let now = new Date();
    let dif = '' + (Number(obj.bpi.USD.rate.replace(',', '')) - prvRate).toFixed(4);
    let trend = dif > 0 ? '↑+' : dif < 0 ? '↓' : '~';
    //let trend = dif > 0 ? '↑+' :  '↓' ;

    $("div").html(obj.bpi.USD.rate + ' (' +trend + dif + '): ' + obj.chartName + " rate on " + now.toString());    
    prvRate = Number(obj.bpi.USD.rate.replace(",", "")).toFixed(4);
      //console.log(prvRate);
  });
}

getBitcoinRate();
$("button").on("click", ()=> getBitcoinRate());

setInterval(getBitcoinRate, 1000);;