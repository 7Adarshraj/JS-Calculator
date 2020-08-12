//BUGS

// is appending operators at the starting ( when no number is written )

class Calculator{
    constructor(prevOperandText , currOperandText)
    {
        this.prevOperandText = prevOperandText;
        this.currOperandText = currOperandText;
        this.allClear(); 
        
    }

    allClear()
    {
        this.currOperandText.innerText= '';
        this.prevOperandText.innerText = '';
        //this.operation = '';

    }

    delete()
    {
        let curr = this.currOperandText.innerText.toString();
        this.currOperandText.innerText = curr.substring(0,curr.length-1);
        console.log("ola " ,this.currOperandText.innerText);

    }

    appendNumber(number)
    {
        if(number.innerText === '.' && this.currOperandText.innerText.includes('.') ){
            console.log(this.currOperandText);
            return;}

        if(this.currOperandText.innerText == '0' && number.innerText === '0')return;    
        this.currOperandText.innerText = currOperandText.innerText.toString() + number.innerText.toString();
    }

    chooseOperation(operation)
    {
        if( currOperandText.innerText == '.')return;
       
        if(currOperandText.innerText == '' && operation.innerText == '-'){
            //this.operation = operation;
            //this.prevOperandText.innerText = currOperandText.innerText;
            this.currOperandText.innerText = '-';
            return;
        }
        
        

        if(this.prevOperandText.innerText !=''){
            console.log('compuuting');
            this.compute();
        }
        this.operation = operation;
               
    }

    compute()
    {
        let result;
        const prev = parseFloat(this.prevOperandText.innerText);
        const curr = parseFloat(this.currOperandText.innerText);
        
        console.log('prev' ,prev);
        console.log('curr' ,curr);
    
        if(isNaN(prev) || isNaN(curr))return;


        switch (this.operation.innerText)
        {
         case '+' :  result = prev + curr;
                        console.log('+');
                     break;
        
        case '-' :  result = prev - curr;
        console.log('-');
                     break;

        case '*' :  result = prev * curr;
        console.log('*');
                     break;

        case '÷' :  result = prev / curr;
        console.log('/');
                     break;
        
        case "%" :  result = prev % curr;
        console.log('mod');
                    break;

        default : console.log('deff');
        }

        console.log('res is', result);
        this.currOperandText.innerText = '';

        let res_string = result.toString();
        if(res_string.length > 14) this.currOperandText.innerText = result.toPrecision(10);
        else  this.currOperandText.innerText = result;

        this.operation = undefined;
        this.prevOperandText.innerText = ''; 
    }
    updateDisplay()
    {
        //this.currOperandText.innerText = currOperandText.innerText;

        if(this.prevOperandText.innerText !=''){
            let len = this.prevOperandText.innerText.toString().length;
            let str = this.prevOperandText.innerText.substring(0,len-1);
            console.log('substr is ', str);
            this.prevOperandText.innerText = this.prevOperandText.innerText.substring(0,len-1);
            this.prevOperandText.innerText = `${this.prevOperandText.innerText} ${this.operation.innerText}`
            console.log('prevtext ',this.prevOperandText.innerText);
            return;

        }

        this.prevOperandText.innerText = currOperandText.innerText;
        this.currOperandText.innerText = ''; 

        if(this.operation != '')
        {
            this.prevOperandText.innerText = `${this.prevOperandText.innerText} ${this.operation.innerText}`

        }
    }

}

const numberButton = document.querySelectorAll('[data = number]');
//console.log(number);
const operationButton =  document.querySelectorAll('[data = operation]');
const allClearButton =  document.querySelector('[data = all_clear]');
const deleteButton =  document.querySelector('[data = delete]');
const equalsbutton =  document.querySelector('[data = equals]');
const prevOperandText =  document.querySelector('[data = prev-operand]');
const currOperandText =  document.querySelector('[data = curr-operand]');

// console.log(allClearButton);
// console.log(currOperandText);

const calculator = new Calculator(prevOperandText,currOperandText);

numberButton.forEach(b => {
    b.addEventListener('click',() => {
        calculator.appendNumber(b).innerHTML;
        //calculator.updateDisplay();
    })
})

operationButton.forEach(b => {
    b.addEventListener('click',() => {
        calculator.chooseOperation(b);
        calculator.updateDisplay();
    })
})

equalsbutton.addEventListener('click', ()=>{
    //console.log('equals')
    calculator.compute();
    //calculator.updateDisplay();
})

allClearButton.addEventListener('click',()=>{
    calculator.allClear();
})

deleteButton.addEventListener('click',()=>{
    calculator.delete();
})


















































































































// // l = [1,2,3,4];

// // for(let i of l){
// //     console.log(i)
// // }

// // let arr = new Array(1,2,3,4);

// // console.log(arr);

// // arr.forEach(function(ele) {console.log(ele);});

// // let nos = arr.filter(function(ele){
// //     return ele%2;
// //  }).map(function(ele){
// //     return ele>2;
// //  });

// // console.log(nos);
// // console.log('dd');

// // arr.forEach(ele => console.log(ele));

// // console.log('!!!');

// // //same as above map and filter 

// // let nos1= arr.filter(
// //     ele => ele%2 ).map(ele => {
// //     return ele>2;
// //  });
// //  console.log(nos1);

// //  class person{
// //      constructor(first,last,add){
// //          this.first = first;
// //          this.last = last;
// //          this.add = add;
// //      }
// //      getFullName(){
// //          console.log(`full name is : ${this.first} ${this.last}`);
// //      }
// //      getAdd() {
// //         console.log(`address : ${this.add}`);
// //      }
// // };

// // let p1 = new person('adarsh','raj','lko');
// // console.log(p1);
// // p1.getFullName();
// // p1.getAdd();

// // const ul = document.querySelectorAll('.item');

// // ul.forEach(item => console.log(`this is li ${item.innerText}`))

// // const ull = document.querySelectorAll('.item');
// // console.log('!!!!!');
// // console.log(ull);   

// // //ull.lastElementChild.remove();
// // ull[0].innerText = 'micro';
// // ull[1].innerHTML = '<h2>noice</h2> ';
// // console.log(ull[1].innerText);

// // let btn = document.querySelector('.btn');
// // btn.style.background = 'blue';

// // let lis = Math.random()*100
// // console.log(lis);
console.log('hello');