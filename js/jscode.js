var cont = 4;
var usuario = new Array(6);
var contrasena = new Array(6);
var i;
var b, a;

usuario[0] = "admin@gmail.com";
contrasena[0] = "21232f297a57a5a743894a0e4a801fc3";

usuario[1] = "host@gmail.com";
contrasena[1] = "67b3dba8bc6778101892eb77249db32e";

usuario[2] = "visit@hotmail.com";
contrasena[2] = "9de70f6546b2452f6e7b98b46ac36070";

usuario[3] = "labor@vision.org";
contrasena[3] = "f42087059b37ae7f4d9f0d3a475801a8";

usuario[4] = "visitor@gmail.com";
contrasena[4] = "127870930d65c57ee65fcc47f2170d38";

function registro(){
  var user = document.getElementById("usuario").value;
  var password = document.getElementById('contra').value;

  if(user == "" || password == ""){
    swal({title:"Error en registro", text:"Llena todos los campos", icon:"error"});
  }

  else if(user != "" || password != ""){
    if(cont<=11){
      cont += 1;
      usuario[cont]= document.getElementById('usuario').value;
      contrasena[cont]= document.getElementById('contra').value;
      console.log(usuario);
      console.log(contrasena);
      swal({
        title: "Registro", text:"Registro almacenado exitosamente", icon: "success", button: "Ok",
      });
      document.getElementById('usuario').value = "";
      document.getElementById('contra').value = "";
  }else{
    swal({title:"Advertencia", text:"YA NO PUEDES INGRESAR MAS REGISTROS", icon:"warning"});
  }
 }
}

function login(){
  var user = document.getElementById("usuario").value;
  var contra = document.getElementById('contra').value;
  var pass = md5(contra);

  if(user == "" || contra == ""){
    swal({title:"Error en registro", text:"Asegurate de llenar todos los campos", icon:"warning"});
  }else if(user != "" || password != ""){
    for(i = 0; i<usuario.length; i+= 1){
      if(user == usuario[i] && pass == contrasena[i]){

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; ";
        }

        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1);
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        }

        function checkCookie() {
            var nombre = getCookie("nombre");
            var contra = getCookie("usuario");

            if (nombre != "" && contra != "") {
                swal({title:"Usuario correcto", text:"Bienvenido " + nombre, icon:"success"});
            } else {
                nombre = document.getElementById('usuario').value;
                if (nombre != "" && contra != null) {
                    setCookie("nombre", nombre);
                }
                contra = document.getElementById('contra').value;
                if (contra != "" && contra != null) {
                    setCookie("usuario", contra);
                }
            }
        }
        checkCookie();
        $("#cuerpo").load("/html5_css3/view/model.html");
        i = 12;
      }else{
        swal({title: "Error", text:"Usuario o contraseña incorrectos.", icon:"error"});
        document.getElementById('usuario').value = "";
        document.getElementById('contra').value = "";
      }
    }
  }
}

function compro(){
  var user = document.getElementById("usuario").value;
  var contra = document.getElementById('contra').value;
  var mdcontra = md5(contra);

  console.log(user + mdcontra + contra + contrasena[0]);
}
