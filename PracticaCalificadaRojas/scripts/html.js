var HTMLGenerator = {
    a: function (texto, link) {
        return '<a href="'+link+'">'+ texto + '</a>';
    },

    b: function (texto) {
        return '<b>' + texto + '</b>';
    },

    p: function (texto) {
        return '<p>' + texto + '</p>';
    },

    div: function (parrafo, estilo) {
        return "<div id='div'" + estilo + ">" + parrafo + "</div>";
    },

    span: function (texto) {
        return "<span>"+ texto + "</span>";
    },

    title: function (texto) {
        return '<title>' + texto + '</title>';
    },

    comment: function (texto) {
        return "< !- " + texto + " ->" ;
    },

    h1: function (texto) {
        return '<h1>' + texto + '</h1>';
    },

    saltoLinea: function () {
        return "<br/>";
    },
         
}