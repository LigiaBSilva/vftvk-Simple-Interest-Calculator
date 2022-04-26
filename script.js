
    
function compute()
{
   var principal_amount = document.getElementById("principal").value;
   
   var rate = document.getElementById("rate").value;

   var years = document.getElementById("years").value;

   var interest = principal_amount*rate*years/100;

   var year= new Date().getFullYear()+parseInt(years)
   
    if (principal_amount == "")
        {alert ("please enter a positive number");
        principal.focus();
        return false;}

    if (principal_amount <=0)
    {alert ("please enter a positive number");
    principal.focus();
    return false;}

    else  
    text_amount.innerText = principal_amount;
    text_rate.innerText = rate;
    profit.innerText = interest;
    text_years.innerText = year;
    return true;}

function slider_value(){
    var rate = document.getElementById("rate");
    var ratedisplay = document.getElementById("rate_val");
    rate_val.innerText = rate.value+"%";
}
function ligia_function(){
ligia.innerText = "hoje"}