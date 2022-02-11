$(document).ready(() => {
  $("#empezar").click(() => route("formulario"));
  $("#otro").click(() => route(""));
  $("#mostrarCarrito").click(() => {
    $("#carrito").fadeIn();
  });
  $(".cerrar").click((el) => {
    $(el.target).parent().css("display", "none");
  });
});
