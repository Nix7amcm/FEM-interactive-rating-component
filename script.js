const form = document.querySelector( "[data-form]" );
const template = document.querySelector( "[data-template]" );
const wrapper = document.querySelector( "[data-wrapper]" );


function handleSubmit ( event ) {
  event.preventDefault();

  const rating = new FormData( event.target ).get( "rating" );

  if ( rating ) {
    wrapper.innerHTML = template.innerHTML.replace( /{{ rating }}/, rating );
    //::::: when rating is selected and submitted, 'wrapper' (main) will be replaced with 'template', and selected rating will replace {{ rating }} string.
  }
}

form.addEventListener( "submit", handleSubmit );
//::::: 'Submit' button will trigger 'handleSubmit' function