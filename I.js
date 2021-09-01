let number = document.getElementById('number');
buttons = document.querySelectorAll('button');
let numbervalue = '';
for(item of buttons){

    item.addEventListener('click', (b)=>{

        buttontext = b.target.innerText; 
        console.log('button value is', buttontext);
        //logic
        if(buttontext=='='){
            number.value = eval(numbervalue);
            
            
        }
        else if(buttontext == 'C'){
            numbervalue = "";           
            number.value = numbervalue;
        }
        else if( buttontext == 'X'){
            numbervalue = number.value;
            numbervalue = numbervalue.substring(0,numbervalue.length - 1);
            number.value = numbervalue;
        }
        else{
            numbervalue += buttontext;
            number.value = numbervalue;
        }
     })

}
