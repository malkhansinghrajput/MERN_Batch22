// Task -1 Done
// 1. get the div so you can attached button
let divEle = document.getElementById("Div-1")
console.log("Now we have div", divEle)

// 2.create a button 
let addbtn = document.createElement("button")
console.log('bottun created', addbtn)

// 3.Add content too the button
addbtn.textContent = " Add "

// 4.attach the btn inside the div
divEle.appendChild(addbtn)

// Task-2
// 1.get the button so we already have btn(done)

// 2.attacheEvent handler
addbtn.addEventListener("click", () => {
    console.log("mekush karunga")
// 1.get the div so that you can attached btn (done)
// 2.create paragraph
let pareEle = document.createElement("p")
// 3. add the content to the button
pareEle.textContent = "Sab khtam kr dega"
// 4.attch the para to the div
divEle.appendChild(pareEle) 
})
