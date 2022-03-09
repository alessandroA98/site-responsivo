window.onload = function(){
    document.querySelector(".botao_menu").addEventListener("click", function(){
        if (document.querySelector(".botao_menu").style.display == 'none') {
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
        else if(document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none'
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
    })
}