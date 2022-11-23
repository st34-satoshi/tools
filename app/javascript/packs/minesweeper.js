// javascript for minesweeper

console.log('hello minesweeper');

let cells = Array(6*6);


// decide bomb position and cell number
function setCells(){
    // bomb position
    let bombPositions = decideBombPosition(); // index of bomb
    for(let i=0;i<bombPositions.length;i++){
        cells[bombPositions[i]] = 'b';
    }
    // number
    const arounds = [-7, -6, -5, -1, 1, 5, 6, 7];
    const aroundsLeftSide = [-6, -5, 1, 6, 7];
    const aroundsRightSice = [-7, -6, -1, 5, 6];
    for(let i=0;i<cells.length;i++){
        const c = cells[i];
        if(c === 'b'){
            continue;
        }
        let aroundBombNumber = 0;
        let ar = arounds;
        if(i % 6 === 0){
            ar = aroundsLeftSide;
        }else if(i % 6 === 5){
            ar = aroundsRightSice;
        }
        for(let j=0;j<ar.length;j++){
            const around = ar[j];
            const k = i + around;
            if(k<0 || k>cells.length-1){
                continue;
            }
            if(cells[k] === 'b'){
                aroundBombNumber += 1;
            }
        }
        cells[i] = aroundBombNumber;
    }
    // show cells
    for(let i=0;i<cells.length;i++){
        $(`#cell${i}`).text(cells[i]);
    }
}

function decideBombPosition(){
    let arr = Array(6*6);
    let bombPositions = [];
    for(let i=0;i<6*6;i++){
        arr[i] = i;
    }
    for(let i=0;i<4;i++){
        const rand = Math.floor( Math.random() * arr.length);
        bombPositions.push(arr[rand]);
        arr.splice(rand, 1);
    }
    return bombPositions;
}

$(function() {
    setCells();
});