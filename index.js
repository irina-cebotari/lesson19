// const numberArr = [1,2,3,4,5,6,7,8]

// const arrSum = numberArr.reduce((acc, curr, index, arr) => {
//     console.log('acc:', acc, 'curr:', curr, 'index:', index)

//     return acc * curr
// }, 1)

// console.log('result is:', arrSum)



// const returnNumberTypeList = (arr) => {

//     return arr.reduce((acc, curr) => {
//         if(curr%2 === 0) {
//             acc.evenList.push(curr)
//             return acc
//         }

//         acc.oddList.push(curr)
//         return acc


//     }, 
//     {
//         evenList: [],
//         oddList: []
//     })
// }

// console.log(returnNumberTypeList(numberArr))




// const numberArr = [1,2,3,4,5,6,7,8]

// const obj = {
//     nume: 'Dima',
//     age: 27,
//     hobby: 'gaming'
// }

// numberArr.forEach((item) => console.log(item))

// for(let item of  numberArr) {
//     console.log(item)
// }

// for(let item in  obj) {
//     console.log(obj[item])
// }


// const obj = {
//     nume: 'Dima',
//     age: 27,
//     hobby: 'gaming',
//     city: 'Chisinau',
//     ZIP: 'MS2006',
//     address: {
//         street: {
//             name: 'Stefan cel Mare'
//         }
//     }
// }

// for(let item in obj) {
//         console.log(`Key: ${item}, Value: ${obj[item]}`)
//     }


// const obj1 = {...obj, job: 'Accountant', nume: 'Diana'}

// console.log(obj, obj1)

// console.log({...obj, ...obj1})



// const obj1 = {...obj}

// obj1.address.street.name = 'Zelinski'

// console.log(obj)



const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const arr1 = [...arr, 9, 10, 11]
// arr1[0] = 0

// console.log(arr1)


// const func1 = (arr1) => {
//     return [...arr1].push(7)
// }

// func1(arr)

// console.log(arr)



// const func1 = (arr1) => {
//     const newArr = [...arr1]
//     newArr.push(7)
//     return newArr
// }

// console.log(func1(arr))

// console.log(arr)


// const sortFunc = (numList) => {
//     const evenList = numList.filter(item => item % 2 === 0).sort((a, b) => b - a > 0 ? 1 : -1)
//     const oddList = numList.filter(item => item % 2 !== 0).sort((a, b) => a - b > 0 ? 1 : -1)

//     return [...oddList, ...evenList]
// }

// console.log(sortFunc(arr))




// const func = (list) => {
//     return list.reduce((acc, curr, index) => {

//         if (!acc) {
//             return acc;
//         }
//         return list.every((item, idx) => {
//             return item !== curr || idx === index
//         }) ? true : false
//         }, true)
// }

// console.log(func(arr))



const func = (list) => {
    const setList = new Set(list)
    console.log(Object.entries(setList))
}

console.log(func(arr))