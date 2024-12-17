const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_xcfwful';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR MENSAJE';
      alert('ENVIO EXITOSO!');
    }, (err) => {
      btn.value = 'ENVIAR MENSAJE';
      alert(JSON.stringify(err));
    });
});