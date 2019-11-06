var sysname;
var sysapi = 'http://testmobile1.gear.host/api/';
//var sysapi = 'http://localhost/services/api/';

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
    localStorage.setItem("syssession", key);
}

function getSession() {
    return localStorage.getItem("syssession");
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