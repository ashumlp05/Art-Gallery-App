function validate(){
  let username = document.getElementById('usenmae').Value;
  let password = document.getElementById('password').Value;
  if (username =='webdev' && password =='learn')
  {
    alert('Login successfuly');

  }
  else{
    alert('Login failed');
  }
}