function translateToDecimal(num) {
    const ones=[
        {'I':1},
        {'II':2},
        {'III':3},
        {'IV':4},
        {'V':5},
        {'VI':6},
        {'VII':7},
        {'VIII':8},
        {'IX':9},
        {'X':10}
    ]
    const tens=[
        {'X':10},
        {'XX':20},
        {'XXX':30},
        {'XL':40},
        {'L':50},
        {'LX':60},
        {'LXX':70},
        {'LXXX':80},
        {'XC':90}
    ]
    const hundreds=[
        {'C':100},
        {'CC':200},
        {'CCC':300},
        {'CD':400},
        {'D':500},
        {'DC':600},
        {'DCC':700},
        {'DCCC':800},
        {'CM':900},
    ]
    let result=0;
    let countH=0;
    let countT=0;
    let hundredResult=0;
    let tenResult=0;
    let oneResult=0;
    const roman=num.split("");
     for (const hundred of hundreds) {
        if(Object.keys(hundred)==roman[0]) {
            hundredResult=Number(Object.values(hundred));
            countH=1;
        }else  if (Object.keys(hundred)==roman[0]+roman[1]) {
            hundredResult=Number(Object.values(hundred));
            countH=2;
        }else  if (Object.keys(hundred)==roman[0]+roman[1]+roman[2]) {
            hundredResult=Number(Object.values(hundred));
            countH=3;
        }else if (Object.keys(hundred)==roman[0]+roman[1]+roman[2]+roman[3]) {
            hundredResult=Number(Object.values(hundred));
            countH=4;
        } 
    }
    for (const ten of tens) {
        if(Object.keys(ten)==roman[countH]) {
            tenResult=Number(Object.values(ten));
            countT=countH+1;
        }else  if (Object.keys(ten)==roman[countH]+roman[countH+1]) {
            tenResult=Number(Object.values(ten));
            countT=countH+2;
        }else  if (Object.keys(ten)==roman[countH]+roman[countH+1]+roman[countH+2]) {
            tenResult=Number(Object.values(ten));
            countT=countH+3;
        }else if (Object.keys(ten)==roman[countH]+roman[countH+1]+roman[countH+2]+roman[countH+3]) {
            tenResult=Number(Object.values(ten));
            countT=countH+4;
        } 
    }
    for (const one of ones) {
        if(Object.keys(one)==roman[countT]) {
            oneResult=Number(Object.values(one));
        }else  if (Object.keys(one)==roman[countT]+roman[countT+1]) {
            oneResult=Number(Object.values(one));
        }else  if (Object.keys(one)==roman[countT]+roman[countT+1]+roman[countT+2]) {
            oneResult=Number(Object.values(one));
        }else if (Object.keys(one)==roman[countT]+roman[countT+1]+roman[countT+2]+roman[countT+3]) {
            oneResult=Number(Object.values(one));
        } 
    }
    result=hundredResult+tenResult+oneResult;
    console.log(result);
   
}
    translateToDecimal("dcccxx");