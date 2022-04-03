const array = [1, 2, 3, 4, 5]

for(arr in array){
    console.log(array[arr]) // 1 2 3 4 5
}

for(arr in array){
    if(arr == 2){
        break;
    }
    console.log(array[arr]) // 1 2
}

for(arr in array){
    if(arr == 2){
        continue;
    }
    console.log(array[arr]) // 1 3 4 5
}