'use strict';

const Login = () => {
  const login       = $('<div class="login"></div>');
  const title       = $('<h1>Log into Laboratoria</h1>');
  const name       = $('<input type="text" class="username" placeholder="Nombre" required/>');
  const email       = $('<input type="email" class="username" placeholder="Correo electrónico" required/>');
  const password    = $('<input type="password" class="password" placeholder="Contraseña" required/>');
  const loginButton = $('<button type="submit">Ingresar</button>');
  const faceButton  = $('<button>Ingresar con Facebook</button>');


  login.append(title);
  login.append(name);
  login.append(email);
  login.append(password);
  login.append(loginButton);
  login.append(faceButton);

  loginButton.on('click',(e) => {
    e.preventDefault();
    state.user = {email:email.val(), name:name.val(), id:password.val()}; 
    validarUser(state.user);
    alert('Not implement yet');
  });

  faceButton.on('click',(e) => {
    e.preventDefault();
    doLogin();
  });

  return login;
}
