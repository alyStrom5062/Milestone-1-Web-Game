// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 1
// create map array + assign player tile + grab PC sprite + 

//grab Tema's sprite id in the HTML doc
let pcImage = document.getElementById("playerCharacter")

    // map is 17x13
        //draws map. default allows all tiles to be walked on.
        // each tile is 64x64px

//    1(-1088) 2(-1024) 3(-960) 4(-896) 5(-832) 6(-768) 7(-704) 8(-640) 9(-576) 10(-512) 11(-448) 12(-384) 13(-320) 14(-256) 15(-192) 16(-128) 17(-64)

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
        
    let playerTile = 71    // tile: 3x5: 17*4 + 3 = 71 (-960, -512)

    let playerCoordx =  -960
    let playerCoordy = -512

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
            walk()
        }
        if(e.key === "ArrowUp"){
            direction = "Up"
            pcImage.src = "assets/pcTemaUp.png"
            walk()

        }
        if(e.key === 'ArrowRight'){
            direction = "Right"
            pcImage.src = "assets/pcTemaRight.png"
            walk()

        }
        if(e.key === 'ArrowDown'){
            direction = "Down"
            pcImage.src = "assets/pcTemaDown.png"
            walk()
        }
        if(e.key === "Enter"){
            interact()
        }
    })

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 3
// move character to new tile onpress according to his direction

function walk(){ 
    collision()
    if(direction === "Left"){
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
// function to create each npc and object on map.

function newObject(src, id, top, left){
    let image = document.createElement('img')
    image.src = src
    image.setAttribute("id", id)
    image.style.position = "relative"
    image.style.top = top + "px"
    image.style.left = left + "px"
    document.body.append(image)
    return image
}

newObject("assets/npcRubinDown.png", "rubinNPC", -720, 704)

newObject("assets/pillarRed.png", "pillarRed", -720, 128)
newObject("assets/pillarBlue.png", "pillarBlue", -720, 256)
newObject("assets/pillarPurple.png", "pillarPurple", -720, 448)
newObject("assets/pillarWhite.png", "pillarWhite", -720, 576)

newObject("assets/buttons/buttonUpRed.png", "redPlate", -438, 0)
newObject("assets/buttons/buttonUpBlue.png", "bluePlate", -438, 64)
newObject("assets/buttons/buttonUpPurple.png", "purplePlate", -438, 128)
newObject("assets/buttons/buttonUpWhite.png", "whitePlate", -438, 192)

newObject("assets/buttons/leverUpRed.png", "redLever", -784, -320)
newObject("assets/buttons/leverUpPurple.png", "purpleLever", -784, -128)
newObject("assets/buttons/leverUpWhite.png", "whiteLever", -784, 64)

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 5
// Other Objects and NPCs are impassable based on tile number.

let impassableObjects = ["rubinNPC", "pillarRed", "pillarBlue", "pillarPurple", "pillarWhite"]

function collision(){
    if(direction === "Up" && playerTile === 89){
        playerCoordy = -448
    }
}


// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 6
// Objects are interactible.

        let redLever = document.getElementById("redLever")
        let purpleLever = document.getElementById("purpleLever")
        let whiteLever = document.getElementById("whiteLever")

        let redPlate = document.getElementById("redPlate")
        let bluePlate = document.getElementById("bluePlate")
        let purplePlate = document.getElementById("purplePlate")
        let whitePlate = document.getElementById("whitePlate")

        function interact(){

            // Levers

                if(direction === "Up" && playerTile === 73){
                    redLever.src = "assets/buttons/leverDownRed.png"
                    console.log("Red Lever Pulled")
                }
                if(direction === "Up" && playerTile === 77){
                    purpleLever.src = "assets/buttons/leverDownPurple.png"
                    console.log("Purple Lever Pulled")
                }
                if(direction === "Up" && playerTile === 81){
                    whiteLever.src = "assets/buttons/leverDownWhite.png"
                    console.log("White Lever Pulled")
                }


            // Plate Buttons

            if(playerTile === 142){
                redPlate.src = "assets/buttons/buttonDownRed.png"
                console.log("Red Plate Pressed")
            }
            if(playerTile === 144){
                bluePlate.src = "assets/buttons/buttonDownBlue.png"
                console.log("Blue Plate Pressed")
            }
            if(playerTile === 146){
                purplePlate.src = "assets/buttons/buttonDownPurple.png"
                console.log("Purple Plate Pressed")
            }
            if(playerTile === 148){
                whitePlate.src = "assets/buttons/buttonDownWhite.png"
                console.log("White Plate Pressed")
            }
        }

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 7
// Rubin Interact.

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 8
// Plate Puzzle

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 9
// Lever Puzzle

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 10
// The End
