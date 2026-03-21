const downloadLink = document.querySelector('.download-link');

downloadLink.addEventListener('click', (e) => {
  e.preventDefault();

  const fakeContent = 'orange-developer-merchantid-domain-association-check: 7B22706172746E65724D65726368616E744944223A224D50433734354C524251227D';

  const blob = new Blob([fakeContent], { type: 'application/octet-stream' });

  const url = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.href = url;

  tempLink.download = 'orange-developer-merchantid-domain-association';

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  window.URL.revokeObjectURL(url);
});
