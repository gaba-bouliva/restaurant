import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function clearPageContent(){
  let contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
}

function loadPage(){
  home()
  let homeBtn = document.querySelector('#home-btn');
  homeBtn.addEventListener('click', () =>{
  clearPageContent()
  home()
  })

  let menuBtn = document.querySelector('#menu-btn');
  menuBtn.addEventListener('click', () =>{
  clearPageContent()
  menu()
  })

  let contactBtn = document.querySelector('#contact-btn');
  contactBtn.addEventListener('click', () => {
  clearPageContent()
  contact()
  })
}

document.addEventListener('load', loadPage());

