const tieneBloqueVertical = (array: number[][]) => {
    for (let i = 0; i < array[0].length; i++) {
        if (array.length/3>=1){
            let max = Math.floor(array.length/3)
            for (let j = 0; j < max; j++) {
                console.log(array[j][i], array[j+1][i], array[j+2][i])
                if (array[j][i] === array[j+1][i] && array[j][i] === array[j+2][i]) {
                    console.log(true);
                    return true;
                }
            }
        }
    }
    console.log(false);
    return false;
}