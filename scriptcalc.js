// we haave to make the javaascript get the html we declare vaariable and get element by the keys

const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.buttons button');
// we have  to start like nothing happened
let prev = null;// prev we inputed
let opr = null; // operator
let reset = false;// reset false because prev and operator is null

function calculate (a,b,op){

if(op === '+') return a+b;
if(op === '-') return a-b;
if(op === '*') return a*b;
if(op === '/'){
if(b === 0){
return 'Error';

}

else {

return a/b;
}



}
  
  
  return b; 
  
  


}




buttons.forEach(button => {// element .forEach element

button.addEventListener('click',()=> {

const value = button.textContent;

if (value ==='C') {

screen.textContent = '0';
prev = null;
opr = null;
reset= false;

return;
};


if(value === 'del'){

if( screen.textContent.length === 1){

screen.textContent = '0';


}

else {

screen.textContent = screen.textContent.slice(0 ,-1);




};


return;

};

if ( ['+','-','*','/'].includes(value)){

prev = parseFloat(screen.textContent);
  opr = value;
reset = true;

return;

};

if (value === '='){

  if (opr === null) return;
  

const current = parseFloat(screen.textContent);
const result = calculate(prev,current,opr)
 screen.textContent= result;

prev = null;
opr = null;
reset = true;
return;


};


if(value === '.'){

  if(screen.textContent.length >1)
    return;
}




if( reset || screen.textContent === '0'){

screen.textContent = value;
reset = false;


}

else {



screen.textContent += value;





};












});


});

