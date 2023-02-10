console.log(sum(process.argv));

function sum (arr){ 
    let res = 0;
    for (let i = 2; i < arr.length; i++) {
        res += Number(arr[i]);
    }
    return res;
}