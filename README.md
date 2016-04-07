# JS-funny-closure
### sum example

  one of the bad side of js there is no standart private methods to encapsulate variables.
  but we have powerful tool - closures.
  
  usage : look at index.html and js/closure.js
  
  in first case : var sum1 = sum(2)(3)(5)();
  console.log(sum1); // 10
  it returns summ of all arguments
  
  
  in second case we have oppotunity to use public method to change private variable:
  
  var sum2 = sum2(2);

    console.log(sum2.getVal()); // 2
    sum2.add(2);
    console.log(sum2.getVal()); // 4
    sum2.add(5);  
    console.log(sum2.getVal());  //9

    console.log(sum2.value); // undefined                         it means variable value is 'private'
    
