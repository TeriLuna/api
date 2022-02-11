function route(route) {
  location.href = location.pathname + "#/" + route;
  irA(findActionByPath(route, routes));
}

function irA(id) {
  $(".layout").css("display", "none");
  $("#" + id).fadeIn();
}

const routes = [
  { path: "/", action: "inicio" },
  { path: "/formulario", action: "form" },
  { path: "/gracias", action: "gracias" },
];

const parseLocation = () => {
  return location.hash.slice(1).toLowerCase() || "/";
};
const findActionByPath = (path, routes) => {
  return routes.find((r) => r.path == path || undefined);
};
const router = () => {
  //OBTENER RUTA ACTUAL
  const path = parseLocation();
  const { action = "error" } = findActionByPath(path, routes) || {};
  irA(action);
};

//CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION ROUTER
$(window).on("load", function () {
  router();
});
//CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
$(window).on("hashchange", function () {
  router();
});
