window.addEventListener("click", function(e){
    if(document.getElementsByClassName("menu--item")[2]){
        var searchDiv = document.getElementsByClassName("menu--item")[2];
        var searchInput = document.getElementsByClassName("search-query")[0];
        if($(searchInput).is(':focus')){
            searchDiv.classList.remove("active");
            searchDiv.classList.add("active");
        } else {
            searchDiv.classList.remove("active");        
        }
    }
});
