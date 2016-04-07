    function sum(val) {
        var value = val

        return function sum(val2){
            if (val2 === undefined){
                
                return value;
                }

                value += val2;
                return sum;

        }
    }
    function sum2(val) {
        var value = val;

        return {
            getVal : function() {
                return value;
            }, add : function add(val2) {
                if ( val2 === undefined ) {
                    return getVal();
                }
                value += val2;
                return add;
            }
        }
}