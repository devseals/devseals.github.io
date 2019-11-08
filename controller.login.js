sysname = "Hayex";

$(document).ready(function () {

    $("#login-iniciarSesion").click(function () {
        iniciarSesion(); return false;
    });
});


function iniciarSesion() {
		
    if (validar()) {
		$.ajax({
			method: "POST",
            url: sysapi+"login/owner",
            dataType: "json",
            headers: {
                "x-requested-with": "xhr" 
            },
			data: { 
				"Username" : $("#login-usuario").val(),
				"Password": $("#login-contrasenna").val()
			},
			success: function (response) {
                setSession(JSON.stringify(response.Owner));
                setToken(JSON.stringify(response.Token));

                //window.localStorage.setItem("sysusuario", JSON.stringify(response.Owner));
                //window.localStorage.setItem("token", JSON.stringify(response.Token));
                //showSuccess(response.result.nombre);

                location.href = 'web/home.html';
			},
			error: function (response) {				
				showError(JSON.stringify(response));
				console.log(JSON.stringify(response));
			}
		});		
    }
    else {
        showError("Por favor ingrese datos");
    }
    
}


function validar() {
    return $("#login-usuario").val().trim() != "" && $("#login-contrasenna").val() != "";
}

