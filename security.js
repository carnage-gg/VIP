const password = 'geyTH6';
if (localStorage.getItem('in') === null) {
  const input = prompt('Password:');
  if (input === password) {
    localStorage.setItem('in', 'yes');
  }
}
