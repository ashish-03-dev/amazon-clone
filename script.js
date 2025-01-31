// window.onload = function () {
//     setTimeout(function () {       
//         let  loaders = document.querySelectorAll(".loader");
//         for(let node of loaders){
//             // node.style.display="none";
//             node.style.opacity="0";
//             node.style.visibility="hidden";
//         }
//         document.querySelector("body").classList.remove("loaderCenter");

//         document.querySelector(".body").style.display="block";
//         setTimeout(()=>{
//             document.querySelector(".body").style.opacity="1";
//         },100);
//     }, 2500);
// }; 

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let loaders = document.querySelectorAll(".loader");
        for (let node of loaders) {
            // node.style.display="none";
            node.style.opacity = "0";
            node.style.visibility = "hidden";
        }
        setTimeout(() => {
            for (let node of loaders) {
                node.style.display = "none";
            };
            document.querySelector("body").classList.remove("loaderCenter");
            document.querySelector(".body").style.display = "block";
            setTimeout(() => {
                document.querySelector(".body").style.opacity = "1";
            },100);
        }, 300);
    }, 700);
});