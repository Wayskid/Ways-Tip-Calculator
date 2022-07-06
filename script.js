const inputBill = document.querySelector(".inputBill");
const inputNOP = document.querySelector(".inputNOP");
const sixGrid = document.querySelector(".sixGrid");
const customPercent = document.querySelector(".customPercent");
const customWrap = document.querySelector(".customWrap");
const customInput = document.querySelector(".customInput");
const calculateBtn = document.querySelector(".calculateBtn");
const ARVal = document.querySelector(".ARVal");
const TRVal = document.querySelector(".TRVal");
const percents = document.querySelectorAll(".percentToSelect");
const errMessage = document.querySelector(".errMessage");


    
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
    const NOPValue = parseFloat(inputNOP.value);
    if (!NOPValue == 0){
        errMessage.classList.remove("show");
        if (customInput.value == "") {
        const billValue = parseFloat(inputBill.value);
        const tipPercent = percentValue;
        
        const tipPerPerson = (billValue * (tipPercent/100))/NOPValue;
        
        const totalPerPerson = (billValue * (1 + (tipPercent/100)))/NOPValue
        
        ARVal.innerText = `$${tipPerPerson.toFixed(2)}`;
        TRVal.innerText = `$${totalPerPerson.toFixed(2)}`;
        }
        else{
            const billValue = parseFloat(inputBill.value);
            const tipPercent = customInput.value;
            
            const tipPerPerson = (billValue * (tipPercent/100))/NOPValue;
            
            const totalPerPerson = (billValue * (1 + (tipPercent/100)))/NOPValue
            
            ARVal.innerText = `$${tipPerPerson.toFixed(2)}`;
            TRVal.innerText = `$${totalPerPerson.toFixed(2)}`;
        }
    }
    else{
        errMessage.classList.add("show");
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






