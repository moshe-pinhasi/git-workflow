
// step 1
function copyToClip(el) {
  /* Get the text field */
  var copyText = el.children[0];

  // /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  // /* Copy the text inside the text field */
  document.execCommand("copy");

  // /* Alert the copied text */
  var notify = document.getElementById("notify");
  notify.classList.toggle('show')

  setTimeout(function () {
    notify.classList.toggle('show')
  }, 2000)
}


// step 2
// headers
// <h4>Hello mister GIT workfow</h4>
// <h1>Hello mister GIT workfow</h1>

// conflict
// step 3 
// subheader
// <p>A list of the most used git commands</p>

// step 4 
// wrap the title & subtitle in header tag
<header>
  <h1>Hello mister GIT workfow</h1>
  <p>A list of the most used git commands</p>
</header>