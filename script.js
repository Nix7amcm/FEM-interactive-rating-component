const form = document.querySelector( "[data-form]" );
const template = document.querySelector( "[data-template]" );
const wrapper = document.querySelector( "[data-wrapper]" );


function handleSubmit ( event ) {
  event.preventDefault();

  const rating = new FormData( event.target ).get( "rating" );

  if ( rating ) {

    wrapper.addEventListener( "animationend", () => {
      //::::: wait until animation (css keyframes) has ended to trigger replace rating below

      wrapper.innerHTML = template.innerHTML.replace( /{{ rating }}/, rating );
      //::::: when rating is selected and submitted, 'wrapper' will be replaced with 'template', and selected rating will replace {{ rating }} html string

      wrapper.classList.replace( "animate-out", "animate-in" );
      //::::: replace class animate-out with animate-in (trigger animations in correct order)
    },
      {
        once: true,
      } );

    playSound();

    wrapper.classList.add( "animate-out" );
    //::::: add new class to wrapper to apply animation

    wrapper.style.height = wrapper.offsetHeight + "px";
    //::::: take height of original main wrapper and apply it to template as inline style

  }
}

function playSound () {
  const audio = new Audio( "sounds/zapsplat_multimedia_ui__short_swipe_whoosh_002_71501.mp3" );

  audio.volume = 0.2;
  audio.play();
}

form.addEventListener( "submit", handleSubmit );
//::::: trigger handleSubmit' function upon 'Submit' button event