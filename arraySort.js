document.addEventListener("DOMContentLoaded", function(event) {

   var newArray = [];
       var parentArray = [
        [[1,2,3],[4,5,6], 2, 2, 2, 2, [7,8,9]],
        [[10,11,12],[13,14,15],[16,17,18]],
        [[19,20,21],[22,23,24],[26,27,28], 2, 2, 2]
       ];

   var sortMyArray = function(arr) {
       
       if ( typeof(arr) == "object") {
           for (var i = 0; i < arr.length; i++) {
               sortMyArray(arr[i]);
           }
       }
       else {
           newArray.push(arr);
       }
   }
   sortMyArray(parentArray);
   console.log("Your new array is " , newArray);
});