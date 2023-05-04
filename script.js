// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 1
// determine which map img is being used and what bounds it has.

//grab Tema's sprite id in the HTML doc
let pcImage = document.getElementById("playerCharacter")

let currentMap = "map1"

    // map is 17x13

    //draws map. default allows all tiles to be walked on.
    // each tile is 64x64px

//            1(-1088) 2(-1024) 3(-960) 4(-896) 5(-832) 6(-768) 7(-704) 8(-640) 9(-576) 10(-512) 11(-448) 12(-384) 13(-320) 14(-256) 15(-192) 16(-128) 17(-64)

        //              1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17
        let mapTiles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //1     (-768)
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //2     (-704)
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //3     (-640)
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //4     (-576)
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //5     (-512)
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //6     (-448) 
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //7     (-384) 
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //8     (-320) 
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //9     (-256)
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //10    (-192) 
                        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //11    (-128)
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //12    (-64)
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //13    (0)
                    ]
        
    let playerTile = 71    // tile: 3x5: 17*4 + 3 = 71 (-512, -960)
    console.log(playerTile)

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 2
// determine characters direction and change sprite

    //default direction
    let direction = "Down"

    //listen for keypress and change direction in accordance
    document.addEventListener('keydown', function(e){
        if(e.key === "ArrowLeft"){
            direction = "Left"
            pcImage.src = "assets/pcTemaLeft.png"
        }
        if(e.key === "ArrowUp"){
            direction = "Up"
            pcImage.src = "assets/pcTemaUp.png"

        }
        if(e.key === 'ArrowRight'){
            direction = "Right"
            pcImage.src = "assets/pcTemaRight.png"

        }
        if(e.key === 'ArrowDown'){
            direction = "Down"
            pcImage.src = "assets/pcTemaDown.png"

        }
        walk()
        console.log(direction)
    })

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 3
// move character to new tile onpress according to his direction

        // limit on where you can walk based on the number of the Tile.

let playerCoordx =  -960
let playerCoordy = -512

function walk(){ 
    if(direction === "Left"){
        playerTile -= 1
        playerCoordx -= 64
        if(playerCoordx < -960){
            playerCoordx = -960
        } else {
            playerTile -= 1
            pcImage.style.left = playerCoordx + "px"
        }
    }

    if(direction === "Up"){
        playerCoordy -= 64
        if(playerCoordy < -512){
            playerCoordy = -512
        } else {
            playerTile -=17
            pcImage.style.top = playerCoordy + "px"
        }
    }

    if(direction === "Right"){
        playerCoordx += 64
        if(playerCoordx > -192){
            playerCoordx = -192
        } else {
            playerTile += 1
            pcImage.style.left = playerCoordx + "px"
        }

    }
    if(direction === "Down"){
        playerCoordy += 64
        if(playerCoordy > -128){
            playerCoordy = -128
        } else {
            playerTile +=17
            pcImage.style.top = playerCoordy + "px"
        }

    }
    console.log(playerTile)
    console.log(playerCoordx + ", " + playerCoordy)
}

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 4
// move character to new tile onpress according to his direction




