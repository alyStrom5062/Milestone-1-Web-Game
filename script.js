// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 1
// assign player tile + grab PC sprite

    // map is 17x13
        //each tile is 64x64px

//    1(-1088) 2(-1024) 3(-960) 4(-896) 5(-832) 6(-768) 7(-704) 8(-640) 9(-576) 10(-512) 11(-448) 12(-384) 13(-320) 14(-256) 15(-192) 16(-128) 17(-64)

        //              1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //1     (-768)
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //2     (-704)
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //3     (-640)
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //4     (-576)
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //5     (-512)
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //6     (-448) 
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //7     (-384) 
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //8     (-320) 
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //9     (-256)
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //10    (-192) 
        //              1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,  //11    (-128)
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //12    (-64)
        //              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  //13    (0)
    
// ============================================================

    // grab Tema's sprite id in the HTML doc
    let pcImage = document.getElementById("playerCharacter")

    // staring position of character

    let playerTile = 71    // tile: 3x5: 17*4 + 3 = 71 (-960, -512)

    let playerCoordx =  -960
    let playerCoordy = -512
  
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

        // STEP 5
        // Other Objects and NPCs are impassable based on tile number.

function walk(){ 
    if(direction === "Left"){
        playerCoordx -= 64
        if(playerCoordx < -960){
            playerCoordx = -960
        } else if(playerTile === 73) {
            playerCoordx = -832
        } else if(playerTile === 76) {
            playerCoordx = -640
        } else if(playerTile === 81) {
            playerCoordx = -320
        } else if(playerTile === 83) {
            playerCoordx = -192
        } else if(playerTile === 112) {
            playerCoordx = -512
        } else {
            playerTile -= 1
            pcImage.style.left = playerCoordx + "px"
        }
    }

    if(direction === "Up"){
        playerCoordy -= 64
        if(playerCoordy < -512){
            playerCoordy = -512
        } else if((playerTile === 89) || (playerTile === 91) || (playerTile === 92) || (playerTile === 96) || (playerTile === 97) || (playerTile === 99)) {
            playerCoordy = -448
        } else if(playerTile === 128) {
            playerCoordy = -320
        } else {
            playerTile -=17
            pcImage.style.top = playerCoordy + "px"
        }
    }

    if(direction === "Right"){
        playerCoordx += 64
        if(playerCoordx > -192){
            playerCoordx = -192
        } else if(playerTile === 71) {
            playerCoordx = -960
        } else if(playerTile === 73) {
            playerCoordx = -832
        } else if(playerTile === 78) {
            playerCoordx = -512
        } else if(playerTile === 81) {
            playerCoordx = -320
        } else if(playerTile === 110) {
            playerCoordx = -640
        } else {
            playerTile += 1
            pcImage.style.left = playerCoordx + "px"
        }

    }
    if(direction === "Down"){
        playerCoordy += 64
        if(playerCoordy > -128){
            playerCoordy = -128
        } else if (playerTile === 94){
            playerCoordy = -448
        } else {
            playerTile +=17
            pcImage.style.top = playerCoordy + "px"
        }
    }

    // console.log(playerCoordx + ", " + playerCoordy)
    // console.log(playerTile)

} // end function walk()



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

newObject("assets/npcLaraDown.png", "laraNPC", -976, 320)
newObject("assets/npcGrishaDown.png", "grishaNPC", -822, 448)
newObject("assets/npcRubinDown.png", "rubinNPC", -976, 576)

newObject("assets/pillarRed.png", "pillarRed", -976, 0)
newObject("assets/pillarBlue.png", "pillarBlue", -976, 128)
newObject("assets/pillarPurple.png", "pillarPurple", -976, 320)
newObject("assets/pillarWhite.png", "pillarWhite", -976, 448)

newObject("assets/buttons/buttonUpRed.png", "redPlate", -694, 0)
newObject("assets/buttons/buttonUpBlue.png", "bluePlate", -694, -192)
newObject("assets/buttons/buttonUpPurple.png", "purplePlate", -694, 128)
newObject("assets/buttons/buttonUpWhite.png", "whitePlate", -694, -64)

newObject("assets/buttons/leverUpRed.png", "redLever", -1040, -448)
newObject("assets/buttons/leverUpPurple.png", "purpleLever", -1040, -256)
newObject("assets/buttons/leverUpWhite.png", "whiteLever", -1040, -64)

// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 6
// Objects are interactible.

        // assigns variables to puzzle DOM elements allowing them to be changed
        let redLever = document.getElementById("redLever")
        let purpleLever = document.getElementById("purpleLever")
        let whiteLever = document.getElementById("whiteLever")

        let redPlate = document.getElementById("redPlate")
        let bluePlate = document.getElementById("bluePlate")
        let purplePlate = document.getElementById("purplePlate")
        let whitePlate = document.getElementById("whitePlate")

        // boolean if object is interacted with.
        let redPulled = false
        let purplePulled = false
        let whitePulled = false

        let redPressed = false
        let bluePressed = false
        let purplePressed = false
        let whitePressed = false

        // puzzle keys
        let leverPuzzleNum = 0 //(3)
        let platePuzzleNum = 0 //(4)

// STEP 12
// Create Reset Function for Puzzles

function leverReset(){
    console.log("Failed Lever Puzzle. Try Again!")
    leverPuzzleNum === 0

    redLever.src = "assets/buttons/leverUpRed.png"
    purpleLever.src = "assets/buttons/leverUpPurple.png"
    whiteLever.src = "assets/buttons/leverUpWhite.png"

    redPulled = false
    purplePulled = false
    whitePulled = false
}

function plateReset(){
    console.log("Failed Plate Puzzle. Try Again!")
    platePuzzleNum === 0

    redPlate.src = "assets/buttons/buttonUpRed.png"
    bluePlate.src = "assets/buttons/buttonUpBlue.png"
    purplePlate.src = "assets/buttons/buttonUpPurple.png"
    whitePlate.src = "assets/buttons/buttonUpWhite.png"

    redPressed = false
    bluePressed = false
    purplePressed = false
    whitePressed = false
}

// =================================

        function interact(){

            // Levers

                if(direction === "Up" && playerTile === 73){
                    redLever.src = "assets/buttons/leverDownRed.png"
                    redPulled = true  
                }

                if(direction === "Up" && playerTile === 77){
                    purpleLever.src = "assets/buttons/leverDownPurple.png"
                    purplePulled = true
                }

                if(direction === "Up" && playerTile === 81){
                    whiteLever.src = "assets/buttons/leverDownWhite.png"
                    whitePulled = true
                }

            // ==================================
            // ==================================

            // Plate Buttons

                if(playerTile === 144){
                    redPlate.src = "assets/buttons/buttonDownRed.png"
                    redPressed = true
                }

                if(playerTile === 142){
                    bluePlate.src = "assets/buttons/buttonDownBlue.png"
                    bluePressed = true
                }

                if(playerTile === 148){
                    purplePlate.src = "assets/buttons/buttonDownPurple.png"
                    purplePressed = true
                }

                if(playerTile === 146){
                    whitePlate.src = "assets/buttons/buttonDownWhite.png"
                    whitePressed = true
                }

            // ==================================
            // ==================================

                // STEP 8
                // Plate Puzzle
                // puzzle order: red, blue, purple, white

                // red (1)
                if(redPressed === true){
                    platePuzzleNum = 1
                    redPressed === false
                }

                // blue (2)
                if(bluePressed === true){
                    if(platePuzzleNum === 1){
                        platePuzzleNum = 2

                        bluePressed === false
                    } else {
                        plateReset()
                    }
                } 

                // purple (3)
                if(purplePressed === true){
                    if(platePuzzleNum === 2){
                        platePuzzleNum = 3

                        purplePressed === false
                    } else {
                        plateReset()
                    }
                }

                // white (4)
                if(whitePressed === true){
                    if(platePuzzleNum === 3){
                        platePuzzleNum = 4

                        whitePressed === false
                        return platePuzzleNum
                    } else {
                        plateReset()
                    }
                }
   

            // ==================================
            // ==================================

                // STEP 9
                // Lever Puzzle
                // puzzle order: purple, white, red

                    // 1 (Purple Lever)
                    if(purplePulled === true){
                        leverPuzzleNum = 1
                        purplePulled === false
                    }

                    // 2 (White Lever)
                    if(whitePulled === true){
                        if(leverPuzzleNum === 1){
                            leverPuzzleNum = 2

                            whitePulled === false
                            } else {
                                leverReset()
                            }
                    }

                    // 3 (Red Lever)
                    if(redPulled === true){
                        if(leverPuzzleNum === 2){
                            leverPuzzleNum = 3

                            redPulled === false
                            return leverPuzzleNum

                        } else {
                            leverReset()
                        }    
                    }

        } // end function interact()


// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// STEP 10
// The End


