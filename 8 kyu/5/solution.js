function solution(str){
 let word = []
 word.push(...str)     
 return word.reverse().join('')
}