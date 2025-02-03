// code for search engine in navbar
function searchit() {
    document.getElementById("searchbtn").href = "https://www.google.com/search?q=" +
        document.getElementById("link-input").value;
}

//code for scrolling button
const myButton=document.getElementById("scrolling_button");
window.onscroll=function(){scroll_function()};
function scroll_function(){
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        myButton.style.display="block";
    }
    else
    {
        myButton.style.display="none";
    }
}
myButton.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})
