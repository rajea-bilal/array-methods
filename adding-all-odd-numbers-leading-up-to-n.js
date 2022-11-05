let result = []
for(let i = 1; i <= n; i++){
  result.push(i)
}
  
return result.filter(item => item % 2 === 1)