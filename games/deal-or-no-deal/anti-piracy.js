// Prevent local use of CodeX VIP
let url = location.href;
if (url.includes('file')) {
  location.href = '/ban.html';
}
