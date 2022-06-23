function FormSubmit(event) {

  let timerInterval
  Swal.fire({
    title: 'PROCESSANDO!',
    timer: 3000,
    imageUrl: 'https://c.tenor.com/k3VfwdRd6cEAAAAi/loading-load.gif',
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })

  event.preventDefault();
  console.log('onLoginFormSubmit');
  var emailAddressInput = document.getElementById('email-address')
  var passwordInput = document.getElementById('password')
  console.log({
    email: emailAddressInput.value,
    password: passwordInput.value
  }

  );

}



