let loading = false;
$(document).ready(() => {
  $("#enviar").click(() => {
    if (!loading) {
      loading = true;

      $("img").fadeIn();
      const email = $("input").val();
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

      if (email && regex.test(email)) {
        $.ajax({
          method: "POST",
          url: "http://localhost:3000/newSubcription",
          data: {
            email,
          },
          success: function (response) {
            if (response === "ok") {
              $("input").val("");
              loading = false;
              $("img").fadeOut();
              route("gracias");
            }
          },
        });
      } else {
        $("#err").fadeIn().fadeOut(2000);
        loading = false;
        $("img").fadeOut();
      }
    }
  });
});
