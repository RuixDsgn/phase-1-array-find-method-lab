// function isOdd(element, index, array) {
//     return (element % 2 === 1);
//   }
  
//   [4, 6, 8, 10].find(isOdd); //=> undefined, not found
//   [4, 5, 8, 10].find(isOdd); //=> 5
//   [4, 5, 7, 8, 10].find(isOdd); //=> 5
//   [4, 7, 5,  8, 10].find(isOdd); //=> 7



const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

const sadReality = [
    { year: "2015", result: "N/A"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "N/A"},
]

function superbowlWin(array) {
    let result = array.find(record => record.result === "W" )
    if (result) {
        return result.year
    }
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].result === "W") {
    //         return array[i].year
    //     }
    // }
return undefined
}

