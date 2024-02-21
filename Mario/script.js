const form = document.querySeletor(".formulario-fale-conosco")
const mascara = document.querySelector(".formulario-fale-conosco")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.stylr.Visibility = "visible"
 }


 function esconderForm(){
   form.style.left = "-300px"
   form.style.transform = "translateX(0)"
   mascara.stylr.Visibility = "hidden"
 }