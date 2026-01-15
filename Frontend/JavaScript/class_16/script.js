// let E = document.getElementById('head1')
// console.log(E)
// console.log(E.textContent)

// // it is array like object but it provide HTML Collection
// let F = document.getElementsByClassName('para1')
// console.log(F)
// console.log(F.length)
// console.log(F[2]);

// let Tag = document.getElementsByTagName('p')
// console.log(Tag)
// console.log(Tag.length)
// console.log(Tag[2])

//first matching paragraph ya tag
// let firstMachingElement = document.querySelector('.para1')   
// console.log(firstMachingElement)

// it is array like object but it provide NodeList they both work same 
// let allElement = document.querySelectorAll('.para1')
// console.log(allElement)


// let E = document.getElementById('head1')
// console.log(E.textContent)

// let E = document.getElementById('head1')
// // E.textContent = 'daba'
// console.log(E.textContent) // Html ke hisab se same code print karega 
// console.log(E.innerText)  //UI ke hisab se dega extra space hata dega


// To access Attribute

// let E = document.getElementById('head1')  //Attribute ko get karna
// console.log(E.getAttribute('id'))

let para = document.getElementsByTagName('p')
console.log(para)
para[0].setAttribute('class', 'para3')

// bhai jab bhi koi HtmlCollection and NodeList jab bhi return hota h tab indexing ka use krna bahut jaruri h.