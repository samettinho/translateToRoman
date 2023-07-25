function translateToDecimal(num) {
    const hundreds=[
        {'DCCC':800},
        {'DCC':700},
        {'CCC':300},
        {'CC':200},
        {'CD':400},
        {'DC':600},
        {'CM':900},
        {'C':100},
        {'D':500},
    ]
    const tens=[
        {'LXXX':80},
        {'XXX':30},
        {'LXX':70},
        {'XX':20},
        {'XL':40},
        {'LX':60},
        {'XC':90},
        {'L':50},
    ]
    const ones=[
        {'VIII':8},
        {'VII':7},
        {'III':3},
        {'II':2},
        {'IV':4},
        {'VI':6},
        {'IX':9},
        {'X':10},
        {'V':5},
        {'I':1},
    ]
    let result=0;
    for (const hundred of hundreds) {
        if (num.toUpperCase().includes(Object.keys(hundred))) {
            result+=Number(Object.values(hundred));
            break;
        }
    }
    for (const ten of tens) {
        if (num.toUpperCase().includes(Object.keys(ten))) {
            result+=Number(Object.values(ten));
            break;
        }
    }
    for (const one of ones) {
        if (num.toUpperCase().includes(Object.keys(one))) {
            result+=Number(Object.values(one));
            break;
        }
    }
    console.log(result); 
}
    translateToDecimal("vI");