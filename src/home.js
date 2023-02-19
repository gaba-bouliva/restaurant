export default function home () {
  /**
   * create content of home page
   * append the content of home page to div with id content
   */
  let currentTabBtn = document.querySelector('#home-btn');
  currentTabBtn.style.backgroundColor = 'rgb(55, 80, 4)';

  let menuTabBtn = document.querySelector('#menu-btn');
  menuTabBtn.style.backgroundColor = 'yellowgreen';

  let contactTabBtn = document.querySelector('#contact-btn');
  contactTabBtn.style.backgroundColor = 'yellowgreen';
  let contentDiv = document.querySelector('#content');

  let headlineImageDiv = document.createElement('div');
  headlineImageDiv.className = 'headline-image';
  let headlineDiv = document.createElement('div');
  headlineDiv.className = 'headline';
  headlineDiv.innerHTML = `<h1>Smile Resto!</h1><div>A hungry man is an angry man. 
                            So come eat and return with a big smile ^__^</div>`;
  let headlineImgDiv = document.createElement('div');
  headlineImgDiv.className = 'headline-img';
  let img = document.createElement('img');
  img.src = `./images/vegetables-set-left-black-slate.jpg`;
  headlineImageDiv.appendChild(headlineDiv);
  headlineImgDiv.appendChild(img);
  headlineImageDiv.appendChild(headlineImgDiv);
  headlineImageDiv.appendChild(headlineImgDiv);

  contentDiv.appendChild(headlineImageDiv);

}