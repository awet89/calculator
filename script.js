var first='';
var second='';
var o = '';
var newO = ''
var original = '';
var operator = 0;
var  con = false; // Checks to see if an operation has been executed 
function displayNumber(num){

    //DISPLAYS NUMBERS ON THE CALCULATOR
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    if(con){
        d.textContent = '0';
        con = false;
    }
    if(d.textContent === '0')
    {
        d.textContent = num;
    }
    else{
    d.textContent += num;
    }
    console.log("THIS IS THE DISPLAY FUNCTION");
    console.log("First: " + first);
    console.log("Second: " + second);
    console.log("Operator: " + o);
    console.log('d.textContent: ' + d.textContent);

    console.log('Original: ' + original);
    console.log("Operator: " + o);
    console.log("New Operator: " + newO);
    console.log("-------------------------");

}
function operate(){
    con = true;
    if(second == ''){
        return;
    }
    console.log("Original string in the operator function: " + original);
        console.log("First: " + first);
        console.log("Second: " + second);
        console.log("Operator: " + o);
        const calculator = document.querySelector('.calculator');
        const display = calculator.querySelector('.display_screen');
        const d = display.querySelector('.display');

        switch (o){
            case '+':
                sum = parseInt(first) + parseInt(second);
                break;
            case '-':
                sum = parseInt(first) - parseInt(second);
                break;
            case '*':
                sum = parseInt(first) * parseInt(second);
                break;
            case "/":
                sum = parseInt(first) / parseInt(second);
                break;
        }
        console.log("THIS THE OPEARTOR FUNCTION");

        console.log("Sum: " + sum);
        console.log("First: " + first);
        console.log("Second: " + second);
        console.log("Operator: " + o);
        console.log("-------------------------");

        first = sum;
        d.textContent = sum;
        second = '';
        o = newO;
        newO = '';
        

   

}

function c(){
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    d.textContent = 0;
    original = '';
    sum = 0;
    first = '';
    second = '';
    o = '';
    con = false;
}

function add(){
    

    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    if(o == '')
        {
            o = '+';
            first = d.textContent;
            original = '';
            d.textContent = '0';
        }
    else
        {
            newO = '+';
            second = d.textContent;
            d.textContent = first;
            operate()
        }
        console.log("Add FUNCTION");
    console.log("First: " + first);
    console.log("Second: " + second);
    console.log("Operator: " + o);
    console.log("-------------------------");
}
function subtract(){
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    var check = original;
    if(o == '')
    {
        o = '-';
        first =d.textContent;
        original = '';
        d.textContent = '0';
    }
else
    {
        newO = '-';
        second = d.textContent;
        d.textContent = original
        operate()
    }
}
function multiply(){
    console.log(" 1.) Original string: " + original);
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    var check = original;
    if(o == '')
        {
            o = '*';
            first = d.textContent;
            original = '';
            d.textContent = '0';
        }
    else
        {
            newO = '*';
            second = d.textContent;
            d.textContent = original
            operate()
        }
}
function divide(){
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.display_screen');
    const d = display.querySelector('.display');
    var check = original;
    if(o == '')
        {
            o = '/';
            first = d.textContent;
            original = '';
            d.textContent = '0';
        }
    else
        {
            newO = '/';
            second = d.textContent;
            d.textContent = original
            operate()
        }
    }
    function equal(){
        const calculator = document.querySelector('.calculator');
        const display = calculator.querySelector('.display_screen');
        const d = display.querySelector('.display');
        second = d.textContent;
        operate();
    }