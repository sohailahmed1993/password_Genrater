
const numberSet = "1234567890";
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbolsSet = "";
let similarCharSet = [
    ['I','l','1','!'],['0','O','o','D','Q'],['5','S','s'],['8','B'],['6','b','G'],['9','g','q'],
    ['2','Z','z'],['m','n','r'],['u','v','y'],['p','d'],['C','G','c','e'],['a','e'],['V','Y','W','w'],
    ['A','R','K','k'],['x','X','*'],['h','n','b']
];

//selectors

const length = document.getElementById('length');
const numberInput = document.getElementById("numbers");
const lowerCaseInput = document.getElementById("lowercase");
const upperCaseInput = document.getElementById("uppercase");
const beginWithLetterInput = document.getElementById("beginwithletter");
const symbolInput = document.getElementById("symbols");
const noSimilarCharacterInput = document.getElementById("nosimilarchar");
const noDuplicateCharaterInput = document.getElementById("noduplicatechar");
const noSequentialCharaterInput = document.getElementById("nosequentialchar");
const autoGenerateInput = document.getElementById("autogenerate");
const result = document.getElementById("result");
const generatePasswordBtn = document.getElementById("generate");
const copyPasswordBtn = document.getElementById("copy");
const symbols = document.getElementById("symbolstype");




const getRandomData = (dataSet) => {
    return  dataSet[Math.floor(Math.random() * dataSet.length)]; 
} 


generatePasswordBtn.addEventListener('click', () =>{
   let str =  validateCheck();
   let randomPassword = "";
   for(let i = 0; i < length.value; i++){
      result.value =  randomPassword += getRandomData(str);  
   }
})


const validateCheck = () => {
    let str = "";
    
    if(numberInput.checked){
        str += numberSet;
    }
    if(lowerCaseInput.checked){
        str += lowerCaseSet;
    }
    if(upperCaseInput.checked){
        str += upperCaseSet;
    }
    if(symbolInput.checked){
        str += symbols.value;
    }
    return str;
    
}































