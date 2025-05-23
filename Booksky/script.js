var popupoverlay=document.querySelector(".popup-overlay")
var popbox=document.querySelector('.pop-box')
var addbutton=document.getElementById('add-popup')

addbutton.addEventListener('click',function(){
    popupoverlay.style.display='block'
    popbox.style.display='block'
})

var popcancel=document.getElementById('cancel-book')
popcancel.addEventListener('click', function(event){
     event.preventDefault()
     popupoverlay.style.display='none'
     popbox.style.display='none'
})

var container=document.querySelector(".container")
var addbook=document.getElementById('add-book')
var booktittle=document.getElementById('book-tittle')
var bookauthor =document.getElementById('book-author')
var bookdiscript=document.getElementById("book-disk")

addbook.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute("class","book-cont")
    div.innerHTML=`<h2>${booktittle.value}</h2>
                <h5>${bookauthor.valur}</h5>
                <p>${bookdiscript.value}</p>
                <button onclick="delbutton(event)">Delete</button>`
     
    container.append(div)
     popupoverlay.style.display='none'
    popbox.style.display='none'

})
function delbutton(){
    event.target.parentElement.remove()
}

