let BillAmt = document.getElementById("billAmount");
let perTip = document.getElementById("percentageTip");
let TipAmt = document.getElementById("tipAmount");
let ToT = document.getElementById("totalAmount");
let msg = document.getElementById("errorMessage");

function Calculate() {
    if (BillAmt.value === "") {
        msg.textContent = "Please Enter a Valid input";
    } else if (perTip.value === "") {
        msg.textContent = "Please Enter a Valid input";
    } else {
        TipAmt.value = (parseInt(perTip.value) / 100) * parseInt(BillAmt.value);
        ToT.value = parseInt(BillAmt.value) + parseInt(TipAmt.value);
        msg.textContent = "";

    }
}
console.log(BillAmt.value)