const removeFromArray = function(arr,...args) {
    const newarr=arr.filter(item=>!args.includes(item));
    return newarr;
}
// Do not edit below this line
module.exports = removeFromArray;
