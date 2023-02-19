export default function menu () {
   /**
   * create content of menu page
   * append the content of menu page to div with with id content
   */
  let contentDiv = document.querySelector('#content');
  let currentTabBtn = document.querySelector('#menu-btn');
  currentTabBtn.style.backgroundColor = 'rgb(55, 80, 4)';

  let homeTabBtn = document.querySelector('#home-btn');
  homeTabBtn.style.backgroundColor = 'yellowgreen';

  let contactTabBtn = document.querySelector('#contact-btn');
  contactTabBtn.style.backgroundColor = 'yellowgreen';



  let menuItems = [
    {
      name: 'spicy food',
      description: 'description spicy food',
      price: '$8',
      img: './images/spicy-food-menu.jpg' 
    },
    {
      name: 'healthy food',
      description: 'description healhty food',
      price: '$10',
      img: './images/healthy-food-menu.jpg' 
    },
    {
      name: 'Fresh salad',
      description: 'description fresh salad food',
      price: '$13',
      img: './images/fresh-salad-menu.jpg' 
    },
     {
      name: 'spicy food',
      description: 'description spicy food',
      price: '$8',
      img: './images/spicy-food-menu.jpg' 
    },
    {
      name: 'healthy food',
      description: 'description healhty food',
      price: '$10',
      img: './images/healthy-food-menu.jpg' 
    },
    {
      name: 'Fresh salad',
      description: 'description fresh salad food',
      price: '$13',
      img: './images/fresh-salad-menu.jpg' 
    }

  ]

  let menuListDiv = document.createElement('div');
  menuListDiv.className = 'menu-list';

  menuItems.forEach(menuItem => {
    let menuItemDiv = document.createElement('div');
    menuItemDiv.className = 'menu-item'

    let menuImgDiv = document.createElement('div');
    menuImgDiv.className = 'menu-img'
    let menuImg = document.createElement('img');
    menuImg.src = menuItem.img;
    menuImgDiv.appendChild(menuImg);

    let menuDetailsDiv = document.createElement('div');
    menuDetailsDiv.className = 'menu-details'

    let menuNameDiv = document.createElement('div');
    menuNameDiv.innerHTML = `<h3>${menuItem.name}</h3>`;
    let menuDescDiv = document.createElement('div');
    menuDescDiv.innerHTML = `<p>${menuItem.description}</p>`;
    let menuPriceDiv = document.createElement('div');
    menuPriceDiv.innerHTML = `<strong>${menuItem.price}</strong>`;

    menuDetailsDiv.appendChild(menuNameDiv);
    menuDetailsDiv.appendChild(menuDescDiv);
    menuDetailsDiv.appendChild(menuPriceDiv);

    menuItemDiv.appendChild(menuImgDiv);
    menuItemDiv.appendChild(menuDetailsDiv);

    menuListDiv.appendChild(menuItemDiv)
    
  });

  contentDiv.appendChild(menuListDiv);

}