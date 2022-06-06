function gomb() {
    document.getElementById("szó").innerHTML = "Mizu?";
}
alert("kutya");
console.log("szia ez egy üzenet");
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d;

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount.input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    if ( amountNumber > 10 ) {
        alert(" maximum 10 terméket vásárolhat");
        return;
    
    }
     else if ( amountNumber < 1 ) {
         alert(" minimum 1 terméket kell cvásárolnia");
     }
     else {
          let amount = parseInt(amountInput.value) * price;
    showAmount.innerHTML = amount;}
        
         
     }

