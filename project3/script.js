function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years)
    var interest = principal * years * rate / 100;
    
    if (principal <= 0) {
        alert("Enter the positive number");
        principal.focus();
        return false

    }
    else{
        document.getElementById("result").innerHTML = "If you deposit<mark> " + principal + "</mark>,\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>"
        return true
    }



}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}