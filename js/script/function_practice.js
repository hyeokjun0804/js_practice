const arrs = ['apple', 'banana', 'cherry']

arrs.forEach((item)=>{
    console.log(item);
});

const arrs2 = [20,30,40,89]
const results = arrs2.map((item)=>item*2)
console.log(results)
const results2 = arrs2.filter((item)=>item%2!==0)
console.log(results2)

const result3 = arrs2.reduce((acc,item)=>acc+item, 0)
console.log(result3)

const result = arrs2.findIndex((item)=>item>80)
console.log(result)
