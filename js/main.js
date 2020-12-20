new Vue({
  el: '#app',
  vuetify: new Vuetify(
    {
      theme: {
        themes: {
          light: {
            primary: '#E53935'

          }
        }
      }
    }
  ),
  created(){
    window.addEventListener("gamepadconnected", function(e) {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
      e.gamepad.index, e.gamepad.id,
      e.gamepad.buttons.length, e.gamepad.axes.length);
    });
  }
});
