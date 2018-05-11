function pixelToVariable( size ){
    // strip out the "px" from the size 
    // 0 converts to 0
    // 0px converts t0 0px

    var size = size.split("px")[0]; 

    var fontSizesNames = {
        "0": 0, // do not touch if it is zero
        "5": "$spacing-xx-small",
        "10": "$spacing-x-small",
        "15": "$spacing-small",
        "20": "$spacing-medium",
        "25": "$spacing-large",
        "30": "$spacing-x-large",
        "35": "$spacing-xx-large"
    }

    // the fontSizes with least positive difference with size is our variable
    return fontSizesNames[ findRightMatch(size) ];


}

function findRightMatch( number ){
    // if number is 3,4,5,6,7 return 5
    // if number is 8,9,10,11,12 return 10
    // have a working solution and improvise later
    if(number ==0 )
        return 0;
    if(number >=3 && number <=7)
        return 5;

    if(number >=8 && number <=12)
        return 10

    if(number >=13 && number <=17)
        return 15

    if(number >=18 && number <=22)
        return 20
        
    if(number >=23 && number <=27)
        return 25

    if(number >=28 && number <=32)
        return 30

    if(number >=33)
        return 35

}

function valueToVariables( values ){
    var toVariables = values.split(' ').map( pixelToVariable ).join(" ");
    if(!toVariables)
        return values;
    return toVariables;
}

exports.valueToVariables = valueToVariables;