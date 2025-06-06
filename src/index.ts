document.getElementById("blank")!.onclick = mark

let tileValue = false

function mark() {
    console.log("test")

    const tile = document.getElementById("blank")
    if(tileValue === false){

        tile!.innerHTML = `

        <h1>T</h1>
    
        <style>
        
            .blank{
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            height: 40px;
            width: 40px;
            background-color: darkred;
            border-color: darkred;
            border-style: solid;
        }
        
        </style>
        `
        return tileValue = true

    } else if(tileValue === true){
        tile!.innerHTML = `

        <h1> </h1>
    
        <style>
        
            .blank{
    height: 40px;
    width: 40px;
    background-color: white;
    border-color: darkgrey;
    border-style: solid;
    border-radius: 5px;
}
        }
        
        </style>
        `
        return tileValue = false
    }

}
