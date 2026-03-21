const clientIdBtn = document.querySelector('#ci-copy-btn');
const clientIdText = document.querySelector('#client-id');

clientIdBtn.addEventListener('click', () => {
  const idToCopy = clientIdText.innerText;

  navigator.clipboard
    .writeText(idToCopy)
    .then(() => {
      clientIdBtn.textContent = '✅';
      setTimeout(() => {
        clientIdBtn.textContent = '📋';
      }, 1500);
    })
    .catch((err) => {
      console.error('Could not copy text: ', err);
    });
});

const secretKeyBtn = document.querySelector('#sk-copy-btn');
const FAKE_SECRET_KEY = 'sk_test_51MzBy8LkdQ0XzVpZ9R2n7mQ4pL9sX3cE1vB6nN8m';

secretKeyBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(FAKE_SECRET_KEY)
    .then(() => {
      const originalIcon = secretKeyBtn.innerText;
      secretKeyBtn.innerText = '✅';

      setTimeout(() => {
        secretKeyBtn.innerText = originalIcon;
      }, 1500);

      console.log('Secret Key copied to clipboard!');
    })
    .catch((err) => {
      console.error('Copy failed', err);
    });
});
