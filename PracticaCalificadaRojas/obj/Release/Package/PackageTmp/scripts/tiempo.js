(function (Fecha) {
    Fecha.index = {
        currentYear: function () {
            var hoy = new Date();
            return hoy.getFullYear();
        }
    };
    document.getElementById("date").innerHTML =
        Fecha.index.currentYear();
})(window.Fecha = window.Fecha || {});//Si es nulo la primera vez

