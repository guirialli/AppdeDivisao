const verify = (arrayBase=[], element ) => (arrayBase.indexOf(element) != -1)

array = [1,2,3,4,5,6,7,8,9,10,0]

console.log(verify(array, 11))