sysname = "Hayex";

$(document).ready(function () {

    $("#login-iniciarSesion").click(function () {
        iniciarSesion(); return false;
    });
});


function iniciarSesion() {
		
    if (validar()) {
		$.ajax({
			url: sysapi+"login/owner",
			method: "POST",
			dataType: "json",
			timeout: 0,
			data: { 
				"Username" : "root",
				"Password": "root"
			},
			beforeSend: function () {
				showLoader();
			},
			async: true,
			processData: true,
			cache: false,
			success: function (response) {				
				if (response.result !== null) {
					/*localStorage.setItem("sysusuario", JSON.stringify(response.result));
					localStorage.setItem("redireccionar", "dashboard");
					generarPanelSource(response.result.username, response.result.rolid);
					showSuccess(response.result.nombre);
					//window.location.href = '../home/index.html?folded=false&bg=&aside=white&brand=white';
					window.location.href = '../home/index.html';*/
				}				
			},
			error: function (err) {
				showError("Lo sentimos!, el usuario y/o contraseña ingresado no es correcto");
			},
			complete: function () {
				hideLoader();
			}
		}).done(function (response) {
		  console.log(response);
		});		
    }
    else {
        showError("Por favor ingrese datos");
    }
    
}



// MAE: 12 de marzo del 2019
function generarPanelSource(username,rolid) {
    $.ajax({
        type: "POST",
        url: sysapi + "roles/get/collection",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            "typecommand": 0,
            "method": "usp_sel_aplicacion_rolid",
            "session": username,
            "parameters": {
                "rolid": rolid
            }
        }),
        beforeSend: function () {
            showLoader();
        },
        async: false,
        processData: true,
        cache: false,
        success: function (response) {
            if (response.transaction.type === "ERR")
                showError(response.result.transaction.message);
            else {
                if (response.result !== null) {
                    const aplicaciones = response.result.rows;
                    aplicaciones.forEach(app => {
                        app.idModulo = 0;
                        app.idTipoOpcion = 3;
                        app.secuencia = 0;
                        app.activo = false;
                        app.detalle = null;
                    });

                    aplicaciones.forEach(app => {
                        app.esDesplegable = app.ruta.length === 0;
                        if (app.idpadre !== -1) {
                            const i = aplicaciones.findIndex(x => x.id === app.idpadre);
                            app.marginleft = "20px";
                            if (i !== -1) {
                                if (aplicaciones[i].detalle === null || aplicaciones[i].detalle === undefined) {
                                    aplicaciones[i].detalle = [];
                                }
                                aplicaciones[i].detalle.push(app);
                                aplicaciones[i].esPadre = true;
                            }
                        }
                    });
                    aplicaciones.forEach(app => {
                        if (app.esDesplegable && app.idpadre !== -1 && app.detalle === null) {
                            const i = aplicaciones.findIndex(x => x.id === app.idpadre);
                            const indexHijo = aplicaciones[i].detalle.findIndex(x => x.id === app.id);
                            aplicaciones[i].detalle.splice(indexHijo, 1);
                            if (aplicaciones[i].detalle.length === 0)
                                aplicaciones[i].esPadre = false;
                        }
                    });
                    const data = aplicaciones.filter(app => app.esPadre && app.idpadre === -1);
                    localStorage.setItem("aplicaciones", JSON.stringify(data));
                }
            }
        },
        error: function (err) {
        },
        complete: function () {
            hideLoader();
        }
    });
}

var datausuarioCombo =
    [
        //{
        //    "id": '-',
        //    "nombre": "[ Seleccione ]"
        //},
        {
            "id": 1,
            "codigo": 'allan.grey',
            "nombre": "Allan Davis Grey Ferrari",
            "rol": "comprador"
        },
        {
            "id": 2,
            "codigo": 'blanca.aquije',
            "nombre": "Blanca Aquije",
            "rol": "aprobador"
        }
    ];

function validar() {
    return $("#login-usuario").val().trim() != "" && $("#login-contrasenna").val() != "";

    //if (($("#login-usuario").val().toLowerCase() === "allan.grey" && $("#login-contrasenna").val() === "1")
    //    ||
    //    ($("#login-usuario").val().toLowerCase() === "blanca.aquije" && $("#login-contrasenna").val() === "12345")
    //) {
    //    datausuarioCombo.forEach(function (element) {
    //        if (element.codigo == $("#login-usuario").val().toLowerCase()) {
    //            var usuario = { "nombre": element.nombre, "id": element.id, "rol": element.rol };
    //            localStorage.setItem("sysusuario", JSON.stringify(usuario));
    //            //localStorage.setItem("nombreusuario", element.nombre);
    //            //localStorage.setItem("idusuario", element.id);
    //            showSuccess(element.nombre);
    //            window.location.href = '../home/index.html?folded=false&bg=&aside=white&brand=white';
    //        }
    //    });

        
    //}   
}

