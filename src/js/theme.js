const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const switchTheme = ({ LIGHT, DARK }) => { 
if (checkboxRef.checked) {
    localStorage.setItem('theme', DARK)
    bodyRef.classList.remove(LIGHT)
    bodyRef.classList.add(DARK)
  } else {
    localStorage.setItem('theme', LIGHT)
    bodyRef.classList.remove(DARK)
    bodyRef.classList.add(LIGHT)
  }
}

const onCheckboxChange = () => { 
  switchTheme(Theme)
}

const  saveSettings = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.DARK) {
    checkboxRef.checked = 'true';
    onCheckboxChange();
  }
}


checkboxRef.addEventListener('change', onCheckboxChange)
saveSettings()
