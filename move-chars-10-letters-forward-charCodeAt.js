// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// assert.strictEqual(moveTen("testcase"), "docdmkco");
// assert.strictEqual(moveTen("codewars"), "mynogkbc");
// assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");
 
function moveTen(s){
 
    return s.split('').map(e => e.charCodeAt(0) + 10 > 122 ? 
                    String.fromCharCode(e.charCodeAt(0) - 16) 
                   : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
                    
    }
      
    console.log(moveTen("testcase"))
    
    