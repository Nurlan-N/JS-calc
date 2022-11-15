alert('Xoş Gəlmisiniz!')
function Dlt_credit() {
    var money = document.getElementById('Money');
    var percent = document.getElementById('Percent');
    var month = document.getElementById('Month');
    var carResault = document.getElementById('cal-resault')
    carResault.style.display = 'none'
    var value_money = toString(money.value);
    var value_percent = toString(percent.value);
    var value_month = toString(month.value);
         if (value_money.length > 0 || value_percent.length > 0 || value_month.length > 0) {
             money.value = '';
             percent.value = '';
             month.value = '';
         }
         
   }

function Calc_credit() {
    var topMonth = document.getElementById('Month');
    var topMoney =document.getElementById('Money');
    var topPercent = document.getElementById('Percent');
    var calMoney = document.getElementById('S_money');
    var calMonth = document.getElementById('S_month');
    var calPercent = document.getElementById('S_percent');
    var percentMoney = topMoney.value / 100 * topPercent.value;
    var sum = (+percentMoney) + (+topMoney.value)

    if (topMoney.value > 0 && topMonth.value > 0 && topPercent.value > 0) {
        calMoney.value = "Kredit məbləği :" + topMoney.value;
        calPercent.value = "Ümumi Ödəniləcək Məbləğ :"+ sum;
        calMonth.value = "Aylıq Ödəniş :" + (sum / +topMonth.value).toFixed(2);
        var carResault = document.getElementById('cal-resault')
        carResault.style.display = 'inline'
    }
    
}   
function Click() {
    var icon = document.getElementById('Icon-click')
    icon.style.bottom = Math.floor(Math.random() * 400) + 'px';
    icon.style.right = Math.floor(Math.random() * 400) + 'px';

}
