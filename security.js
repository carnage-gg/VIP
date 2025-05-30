const password = 'geyTH6';
if (localStorage.getItem('in') === null) {
  const input = prompt('Password:');
  if (input === password) {
    localstorage.setItem('in', 'yes');
  }
}
