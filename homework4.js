 //Write a function that reverses a string with recursion
const reverseFunction = function(str) {
    const n = str.length;
    const ourRec = function(n) {
        if(n<=0)
            return'';
     	return str[n-1] + ourRec(n-1);   
     }
   
    return ourRec(n);
};
console.log(reverseFunction(' You cannot read this '));




//pow
function pow(base,n) {
	if (n!=1) {
		return base*pow(base,n-1);
	}
else {
	return base;
}
}
const result=pow(5,3);
console.log(result)

//triangleStars
const space = function (spc) {
	if(spc === 0) {
		return "";}
		return " " +space (spc-1);
	};

	const star = function (str){
		if (str === 0) {
			return "";
		}

			return "*" + star(str-1);
		};

	const trianglestars = function(n){

			const join = function (num){
		if (num <= 4) {
			return 0;}
			return 1+join(num-1);
		};
	const run = function (n,spc,str,c) {
			if(n<=0){
				return " ";}
				console.log(space(spc)+star(str))
			run(n-1,spc+1,str-2);
		}
			run(n,n-1,n+3+join(n))
		};
	trianglestars(8);


//Checkboard

  const Checkerboard = function(size){
	const recursive = function(n){
		if(n<=0)
		return'';
	const str = function(num,star){
		if(num<=0)
			return '';
		return star+' '+str(num-1,star);
	}
	if(n%2==0)
		console.log(' '+str(size,'*'));
	else
		console.log(str(size,'*'));
	recursive(n-1);
	}	
	recursive(size);
}
Checkerboard(4);