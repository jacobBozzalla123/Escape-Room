console.log("Preload running...");

var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

preload(
  "2fixednote.png",
  "background.png",
  "code.png",
  "fixedbatterphrase.png",
  "fixedinstructions",
  "hall.png",
  "monters.png",
  "text.png"
);
