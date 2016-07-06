//===============================================
// RUN THIS USING NODE
//===============================================

//================================================
// TEST CASES
//================================================

// // Case 1 - Small Set of Numbers
var arr = [12, 12, 13, 13];
for (var i=0, t=40; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}

//Case 2 - Large set of Numbers
// var arr = [];
// for (var i=0, t=400000; i<t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }

//================================================
// SOLUTION - Insertion Sort
//================================================

function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}


//================================================
// FUNCTION CALL 
//================================================

console.log("PRE-SORT");
console.log(arr).join(",");
console.log("---------------------------")
console.log("POST-SORT");
console.log(insertionSort(arr).join(" "));    
