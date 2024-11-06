const sampleHex = document.getElementById("sample-hex")
const gen1 = document.getElementById("generator1")
const gen2 = document.getElementById("generator2")
const gen3 = document.getElementById("generator3")
const gen4 = document.getElementById("generator4")
const gen5 = document.getElementById("generator5")
const dropInput = document.getElementById("schema-drop")
const schemaBtn = document.getElementById("get-schema-btn")
let colorsArray = []
let apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5"


schemaBtn.addEventListener("click" , function dropValue(){
if(dropInput.value === "Monochrome-dark"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome-dark&count=5"
}else if(dropInput.value === "Monochrome-light"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome-light&count=5"
}else if(dropInput.value === "Analogic"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=analogic&count=5"
}else if(dropInput.value === "Complement"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=complement&count=5"
}else if(dropInput.value === "Analogic-complement"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=analogic-complement&count=5"
}else if(dropInput.value === "Triad"){
    apiLink = "https://www.thecolorapi.com/scheme?hex=F55A5A&mode=triad&count=5"
}else{
    apiLink ="https://www.thecolorapi.com/scheme?hex=F55A5A&mode=monochrome&count=5"
}

fetch(apiLink, {method: "GET"})
.then(res => res.json())
.then(data => {
 sampleHex.style.backgroundColor = (data.colors[1].hex.value)
 for(let i=0; i < 5; i++) {
    colorsArray.push(data.colors[i].hex.value)
    console.log(colorsArray)
    renderFooter()
 } 
 gen1.style.backgroundColor = colorsArray[0]
 gen2.style.backgroundColor = colorsArray[1]
 gen3.style.backgroundColor = colorsArray[2]
 gen4.style.backgroundColor = colorsArray[3]
 gen5.style.backgroundColor = colorsArray[4]
})
colorsArray = []
})
    


fetch(apiLink, {method: "GET"})
.then(res => res.json())
.then(data => {
 sampleHex.style.backgroundColor = (data.colors[1].hex.value)
 for(let i=0; i < 5; i++) {
    colorsArray.push(data.colors[i].hex.value)
    console.log(colorsArray)
    renderFooter()
 } 
 gen1.style.backgroundColor = colorsArray[0]
 gen2.style.backgroundColor = colorsArray[1]
 gen3.style.backgroundColor = colorsArray[2]
 gen4.style.backgroundColor = colorsArray[3]
 gen5.style.backgroundColor = colorsArray[4]
})

function renderFooter(){
    let html = ""
    for(let hex of colorsArray){
        html += `
        <div class="value-div">
            <p class="hex-value">${hex}</p>
        </div>
        `
    }
    document.getElementById("hex-bottom-display").innerHTML = html
}

