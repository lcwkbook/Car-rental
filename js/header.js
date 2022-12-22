window.onload=function(){
    let search = document.querySelector('.search');
    let close = document.querySelector('.close');
    let sousuo = document.querySelector('#sousuo');
    let searchBox = document.querySelector('.searchBox');
    search.onclick = function(){
        searchBox.classList.add('active');
        sousuo.style="display: none";
    }
    close.onclick = function(){
        searchBox.classList.remove('active');
        sousuo.style="display: block";
    }
    let menuToggle = document.querySelector('.menuToggle');
    menuToggle.onclick = function(){
        menuToggle.classList.toggle('active');
    }
}