const profileCircleBtn = document.querySelector('#profile-circle-btn');
const profileCardEl = document.querySelector('#profile-card');

profileCircleBtn.addEventListener('change', () => {
  profileCardEl.classList.toggle('hide-content', !profileCircleBtn.checked);
});
