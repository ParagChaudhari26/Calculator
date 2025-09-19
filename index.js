const addition = document.getElementById("addButton");

addition.addEventListener("click", ()=>{
    const input1 = document.getElementById("first");
    const value1 =  Number(input1.value);

    const input2 = document.getElementById("second");
    const value2 =  Number(input2.value);

    const sum = value1+value2;

    const re = document.getElementById("result");
    re.innerHTML = "Result : "+sum;
})

const substraction = document.getElementById("subButton");

substraction.addEventListener("click", ()=>{
    const input1 = document.getElementById("first");
    const value1 =  Number(input1.value);

    const input2 = document.getElementById("second");
    const value2 =  Number(input2.value);

    const sub = value1-value2;

    const re = document.getElementById("result");
    re.innerHTML = "Result : "+sub;
})

const multiplication = document.getElementById("mulButton");

multiplication.addEventListener("click", ()=>{
    const input1 = document.getElementById("first");
    const value1 =  Number(input1.value);

    const input2 = document.getElementById("second");
    const value2 =  Number(input2.value);

    const mul = value1*value2;

    const re = document.getElementById("result");
    re.innerHTML = "Result : "+mul;
})

const division = document.getElementById("divButton");

division.addEventListener("click", ()=>{
    const input1 = document.getElementById("first");
    const value1 =  Number(input1.value);

    const input2 = document.getElementById("second");
    const value2 =  Number(input2.value);

    const div = value1/value2;

    const re = document.getElementById("result");
    re.innerHTML = "Result : "+div;
})