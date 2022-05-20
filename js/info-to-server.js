const loadTrigger = document.getElementById('js-trigger');

loadTrigger.addEventListener('click', () => {
  const fullname = document.getElementById('js-form-fullname').value;
  console.log(fullname);
  const phone = document.getElementById('js-form-phone').value;
  console.log(phone);
  const email = document.getElementById('js-form-email').value;
  console.log(email);
  const date = document.getElementById('js-form-date').value;
  console.log(date);


  const body = {
    fullname: fullname,
    phone: phone,
    email: email,
    date: date,
  };
  console.log(body);
  console.log(body.email);

  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => {
      if (res.success) {
        return res.json();
      } else {
        const responseInvalidEmailMessage = 'Під цим емейлом уже зареєстровано користувача';
        const responseInvalidDateMessage = 'Цей псевдонім уже зайнятий';
        if (!responseInvalidEmailMessage) {
          console.log('Правильний імейл');
          
        } else {
          throw new Error(responseInvalidEmailMessage);
        }
        if (responseInvalidDateMessage) {
          throw new Error(responseInvalidDateMessage);
        }
      }
    })
    .then((response) => {
      console.log(response);
    });
});


