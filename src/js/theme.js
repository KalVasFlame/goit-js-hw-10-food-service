const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const switchTheme = ({ LIGHT, DARK }) => { 
if (checkboxRef.checked) {
    localStorage.setItem('theme', Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
  } else {
    localStorage.setItem('theme', Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
  }
}

const onCheckboxChange = () => { 
  switchTheme(Theme)
  // if (checkboxRef.checked) {
  //   localStorage.setItem('theme', Theme.DARK)
  //   bodyRef.classList.remove(Theme.LIGHT)
  //   bodyRef.classList.add(Theme.DARK)
  // } else {
  //   localStorage.setItem('theme', Theme.LIGHT)
  //   bodyRef.classList.remove(Theme.DARK)
  //   bodyRef.classList.add(Theme.LIGHT)
  // }
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
