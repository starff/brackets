module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    } else {
        let arr = str.split('');
        let numArr = arr.map(function(br) {
            if ( br == "(" || br == 1) {
                return br = 1;
            } else if ( br == ")" || br == 2) {
                return br = 2;
            } else if ( br == "[" || br == 3) {
                return br = 3;
            } else if ( br == "]" || br == 4) {
                return br = 4;
            } else if ( br == "{" || br == 5) {
                return br = 5;
            } else if ( br == "}" || br == 6) {
                return br = 6;
            } else if (br == 8) {
                return br = 8;
            } else {
                return br = 7;
        };
        }); 
        let id;
    let idCount;
        numArr.forEach(function(br, index) {
            if ( br % 2 == 0) {
            	let i;
               for (i = index - 1; i > -1; i = i - 2) { 
				  if (br - numArr[i] == 1) {
				  	delete numArr[index];
				  	delete numArr[i]
					return id = 1;
				};
				}; 
            return id = -1;
            };
        idCount = 1 * id;
        });
        if (idCount < -0 || id == -1) {
            return false;
        } else {
        return true;
        };
    };
    };
