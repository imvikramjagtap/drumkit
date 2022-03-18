
// document.querySelector("button").addEventListener("click", hiii);

for (let i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);

        buttonPressed(buttonInnerHtml);
     
    });
} ;

document.addEventListener("keydown",function(e){
    makeSound(e.key);

    buttonPressed(e.key);


});


function makeSound(key){
    switch (key) {
        case "w":
             (new Audio('sounds/tom-1.mp3')).play();
         break;

       case "a":
           (new Audio('sounds/tom-2.mp3')).play();
           break;

        case "s":
            (new Audio('sounds/tom-3.mp3')).play();
        break;

        case "d":
            (new Audio('sounds/tom-4.mp3')).play();
        break;
        case "j":
            (new Audio('sounds/snare.mp3')).play();
        break;
        case "k":
            (new Audio('sounds/kick-bass.mp3')).play();
        break;
        case "l":
            (new Audio('sounds/crash.mp3')).play();
        break;   

      default:
          break;
  }

};

function buttonPressed (pressedKey){
let avtBtn = (document.querySelector("." + pressedKey));
avtBtn.classList.add("pressed");

setTimeout(function(){
    avtBtn.classList.remove("pressed");
},150)
};