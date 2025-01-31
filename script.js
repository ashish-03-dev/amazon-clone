window.onload = function () {
    setTimeout(function () {       
        let  loaders = document.querySelectorAll(".loader");
        for(let node of loaders){
            node.style.display="none";
        }
        document.querySelector("body").classList.remove("loaderCenter");
        document.querySelector(".body").style.display="block";
    }, 1400);
}; 