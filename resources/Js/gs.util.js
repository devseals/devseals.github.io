var sysname;
var syshelp ="https://cors-anywhere.herokuapp.com/"
var sysapi = syshelp+'http://testmobile1.gear.host/api/';
//var sysapi = 'http://localhost:49220/api/';

function showSuccess(message) {
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: 'toast-top-center',
            timeOut: 4000
        };
        toastr.success(message, sysname);

    }, 300);
}

function showInfo(message) {
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: 'toast-top-center',
            timeOut: 4000
        };
        toastr.info(message, sysname);

    }, 300);
}

function showError(message) {
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: 'toast-top-center',
            timeOut: 4000
        };
        toastr.error(message, sysname);

    }, 300);
}

function showWarning(message) {
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: 'toast-top-center',
            timeOut: 4000
        };
        toastr.warning(message, sysname);

    }, 300);
}

function showSuccessRight(message) {
    setTimeout(function () {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'slideDown',
            positionClass: 'toast-top-right',
            timeOut: 4000
        };
        toastr.success(message, sysname);

    }, 300);
}

function setSession(key) {
    window.localStorage.setItem("sysusuario", key);
}

function getSession() {
    return JSON.parse(window.localStorage.getItem("sysusuario"));
}

function setToken(key) {
    window.localStorage.setItem("token", key);
}

function getToken() {
    return JSON.parse(window.localStorage.getItem("token"));
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function showLoader() {
    $("#loading-panel").css("display", "block");
    $("#loading-panel").html('<div class="panel-load"><img src="' + $("#urlloading").val() + '" width="120" height="40" alt="por favor, espere....." /> </div>');
}

function hideLoader() {
    $("#loading-panel").css("display", "none");
    $("#loading-panel").empty();
}