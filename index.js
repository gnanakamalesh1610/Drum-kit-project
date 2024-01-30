for(var i=0;i<7;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",function(event)
  {
       var button=this.innerHTML;

       makeSound(button);
       buttonAnimation(button);
       
      
  });
}


addEventListener("keypress",function(event)
{
   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key)
{

switch(key)
       {
        case "w" :
            var audio1 = new Audio("assest/tom-1.mp3");
            audio1.play()
            break;
        case "a" :
             var audio2 = new Audio("assest/tom-2.mp3");
             audio2.play()
             break;
        case "s" :
             var audio3 = new Audio("assest/tom-3.mp3");
             audio3.play()
             break;
        case "d" :
             var audio4 = new Audio("assest/tom-4.mp3");
             audio4.play()
             break;
        case "j" :
            var audio5 = new Audio("assest/snare.mp3");
            audio5.play()
            break;
        case "k" :
            var audio6 = new Audio("assest/crash.mp3");
            audio6.play()
            break;
        case "l" :
            var audio7 = new Audio("assest/kick-bass.mp3");
            audio7.play()
            break;
       }
     }
function buttonAnimation(currentKey)
{
    var active=document.querySelector("."+currentKey);
    active.classList.add("pressed");
    setTimeout(function()
    {
     active.classList.remove("pressed");
    },100);
}