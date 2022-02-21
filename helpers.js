
// step 1
function copyToClip(el) {
  console.log('copied!')
}

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
// replace:
// <div>Hello mister GIT workfow</div>
// with
// <h4>Hello mister GIT workfow</h4>
// and then:
// <h1>Hello mister GIT workfow</h1>

// conflict
// step 3 
// subheader
// <header>
//  <div>Hello mister GIT workfow</div>
//  <p>A list of the most used git commands</p>
// </header>