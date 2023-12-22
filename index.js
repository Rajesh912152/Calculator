let billEl=document.getElementById("bill")
let percentageEl=document.getElementById("percentage");
let tipEl=document.getElementById("tip");
let amountEl=document.getElementById("amount");



function calculate(){
    let errorEl=document.getElementById("error");
    let errormsg="Please Enter Valid Input"
    if (billEl.value===""){
        errorEl.textContent=errormsg
    }
    else if (percentageEl.value===""){
        errorEl.textContent=errormsg
    }
    else{
        errorEl.textContent=""
        let billElValue=parseInt(billEl.value)
        let percentageElValue=parseInt(percentageEl.value)
        let tipElValue=(percentageElValue/100)*billElValue
        let amountElValue=tipElValue+billElValue
        tipEl.value=tipElValue
        amountEl.value=amountElValue
        
    }
}