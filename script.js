const arr = [1, 2, 3, 4, 1, 0, 2, 2];
 


const divide = (arr, n) => {
    let temp= [];
    let sum =0; 
    let ans=[];

    for(let i =0;i<arr.length;i++){
        if(sum + arr[i] > n){
            ans.push(temp);
            sum = arr[i];
            temp = [arr[i]];			
        }
        else{
            sum += arr[i];
            temp.push(arr[i]);
        }
    }
    ans.push(temp);
    return ans;
}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
