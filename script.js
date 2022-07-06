const inputBill = document.querySelector(".inputBill");
const inputNOP = document.querySelector(".inputNOP");
const sixGrid = document.querySelector(".sixGrid");
const customPercent = document.querySelector(".customPercent");
const customWrap = document.querySelector(".customWrap");
const customInput = document.querySelector(".customInput");
const calculateBtn = document.querySelector(".calculateBtn");
const ARVal = document.querySelector(".ARVal");
const TRVal = document.querySelector(".TRVal");
// const ResetBtn = document.querySelector(".ResetBtn");
const percents = document.querySelectorAll(".percentToSelect");
const errMessages = document.querySelectorAll(".errMessage");


    
percents[5].children[0].style.background = "none";
percents.forEach(function returnForeach (percent){
    percent.addEventListener("click", (e)=>{
        calculateBtn.classList.remove("userNone");
        var el = percents[0];

        while (el) {
            if (el.tagName === "DIV") {
            el.classList.remove("changeBack");
            }
            el = el.nextSibling;
        }

        e.target.classList.add("changeBack");
        percentValue = parseFloat(e.target.innerText);
        calculateit;
    });
});


calculateBtn.addEventListener("click", calculateit)

function calculateit(){
    
    if (customInput.value == "") {
        const billValue = parseFloat(inputBill.value);
        const NOPValue = parseFloat(inputNOP.value);
        const tipPercent = percentValue;
        
        const tipPerPerson = (billValue * (tipPercent/100))/NOPValue;
        
        const totalPerPerson = (billValue * (1 + (tipPercent/100)))/NOPValue
        
        ARVal.innerText = `$${tipPerPerson.toFixed(2)}`;
        TRVal.innerText = `$${totalPerPerson.toFixed(2)}`;
    }
    else{
        const billValue = parseFloat(inputBill.value);
        const NOPValue = parseFloat(inputNOP.value);
        const tipPercent = customInput.value;
        
        const tipPerPerson = (billValue * (tipPercent/100))/NOPValue;
        
        const totalPerPerson = (billValue * (1 + (tipPercent/100)))/NOPValue
        
        ARVal.innerText = `$${tipPerPerson.toFixed(2)}`;
        TRVal.innerText = `$${totalPerPerson.toFixed(2)}`;
    }
    

}




customPercent.addEventListener("click", ()=>{
    customInput.classList.add("show");
    customPercent.style.display = "none";
    customInput.focus();
})

customInput.addEventListener("click", ()=>{
    customInput.classList.remove("show");
    customPercent.style.display = "block";
    customInput.value = "";
})

// ResetBtn.addEventListener("click", ()=>{
//     window.location.reload();
// })





