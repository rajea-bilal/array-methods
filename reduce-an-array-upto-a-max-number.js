// Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

// Input:

// Array of file sizes (0 <= s <= 100)
// Capacity of the HD (0 <= c <= 500)
// Output:

// Number of files that can be fully saved in the HD.
// Examples:

// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11
// Do not expect any negative or invalid inputs.

//   it("save([4, 4, 4, 3, 3], 12)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 12), 3));
//   it("save([4, 4, 4, 3, 3], 11)", () => assert.strictEqual(save([4, 4, 4, 3, 3], 11), 2));
//   it("save([4, 8, 15, 16, 23, 42], 108)", () => assert.strictEqual(save([4, 8, 15, 16, 23, 42], 108), 6));
//   it("save([13], 13)", () => assert.strictEqual(save([13], 13), 1));
//   it("save([1, 2, 3, 4], 250)", () => assert.strictEqual(save([1, 2, 3, 4], 250), 4));
//   it("save([100], 500)", () => assert.strictEqual(save([100], 500), 1));
//   it("save([11, 13, 15, 17, 19], 8)", () => assert.strictEqual(save([11, 13, 15, 17, 19], 8), 0));
//   it("save([45], 12)", () => assert.strictEqual(save([45], 12), 0));

function save(sizes, hd) {
  
  
    let result = 0
    
    let check = sizes.reduce((total, curr) => {
      if((total = total + curr) <= hd){
        result = result + 1
        return total
      }
    }, 0)
    
  
   return result
    
  }
  
    
  
  console.log(save([4, 4, 4, 3, 3], 11))
  
  