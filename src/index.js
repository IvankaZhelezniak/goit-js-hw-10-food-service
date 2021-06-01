import menuItemsTpl from './templates/menu-items.hbs';
import menu from './menu.json';
import './styles.scss';

const markup = menuItemsTpl(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);

const themeSwitcher = document.querySelector('#theme-switch-toggle');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(theme.LIGHT);

const savedTheme = localStorage.getItem('theme');

themeSwitcher.addEventListener('change', onThemeChange);

if (savedTheme === theme.DARK) {
    switchToDarkTheme();
};

function switchToDarkTheme() {
  document.body.classList.replace(theme.LIGHT, theme.DARK);
  localStorage.setItem('theme', theme.DARK);
  themeSwitcher.setAttribute('checked', true);
};

function switchToLightTheme() {
  document.body.classList.replace(theme.DARK, theme.LIGHT);
  localStorage.setItem('theme', theme.LIGHT);
  themeSwitcher.removeAttribute('checked');
};

function onThemeChange() {
  themeSwitcher.checked ? switchToDarkTheme() : switchToLightTheme();
};