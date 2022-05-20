const showError = (id, error) => {
  const element = document.getElementById(id);
  error ? element.classList.add('error') : element.classList.remove('error');
};

const registration = (event) => {
  event.preventDefault();
  console.log(event);
  const form = new FormData(event.target);
  const fullname = form.get('fullname');
  // console.log(fullname);
  const phone = form.get('phone');
  // console.log(phone);
  const email = form.get('email');
  // console.log(email);
  const date = form.get('date');


  const generateId = (name) => {
    return `js-form-${name}`;
  };

  showError(generateId('first-name'), !fullname);
  showError(generateId('last-name'), !phone);
  showError(generateId('email'), !email);
  showError(generateId('date'), !date);
};

export { registration };
