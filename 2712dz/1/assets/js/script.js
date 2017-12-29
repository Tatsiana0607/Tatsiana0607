function findMinMax(){

    var max=arguments[0];
    var min=arguments[0];

    for (var i = 0; i < arguments.length; i++) {
        if(arguments[i]>max) max=arguments[i];
        if(arguments[i]<min) min=arguments[i];
    }

    alert("Минимальное число: "+min);
    alert("Максимальное число: "+max);
}

findMinMax(6,2,39,-14,0,21,683,95,-7,3,23,57,2,457,-29,3,74);