x = 0;
y = 0;
var apple = "";

var draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var to_number = "";;

function preload() {
  apple = loadImage("apple.png") 
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  console.log(event); 

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

  to_number = Number(content);

  if (Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "Started drawing apples";
    draw_apple = "set";
  }
  else{
    document.getElementById("The speech has not recognized a number");
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height - 100);
  canvas.position(0, 100);
  
}

function draw() {
  if(draw_apple == "set")
  {for (let i = 1; i <= to_number; i++) { 
    x = Math.floor(Math.random() * screen_width);
    y = Math.floor(Math.random() * screen_height);
    console.log(x, y);

    image(apple, x, y, 50, 50);
  }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
