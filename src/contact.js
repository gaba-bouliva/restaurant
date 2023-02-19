export default function contact () {
  /**
   * create content of contact page
   * append the content of contact page to div with with id content
   */

  let currentTabBtn = document.querySelector('#contact-btn');
  currentTabBtn.style.backgroundColor = 'rgb(55, 80, 4)';

  let homeTabBtn = document.querySelector('#home-btn');
  homeTabBtn.style.backgroundColor = 'yellowgreen';

  let menuTabBtn = document.querySelector('#menu-btn');
  menuTabBtn.style.backgroundColor = 'yellowgreen';

  let contentDiv = document.querySelector('#content');

  let contactUsDiv = document.createElement('div');
  contactUsDiv.className = 'contact-us';

  let headingDiv = document.createElement('div');
  headingDiv.className = 'heading'
  headingDiv.innerText = 'Contact Us';

  let contactsDiv = document.createElement('div');
  contactsDiv.className = 'contacts';

  let telephoneDiv = document.createElement('div');
  telephoneDiv.className = 'phone-nbr'
  telephoneDiv.innerHTML = `<p><b><i>Tel</i></b>: (123) 245 456 789</p>`;

  let faxDiv = document.createElement('div');
  faxDiv.className = 'fax-nbr';
  faxDiv.innerHTML = `<p><b><i>Fax</i></b>: 0123 137 5041 </p>`;

  let emailDiv = document.createElement('div');
  emailDiv.className = 'email';
  emailDiv.innerHTML = '<p><b><i>Email</i></b>: enjoy@smileresto.com</p>';

  contactsDiv.appendChild(telephoneDiv);
  contactsDiv.appendChild(faxDiv); 
  contactsDiv.appendChild(emailDiv)

  contactUsDiv.appendChild(headingDiv);
  contactUsDiv.appendChild(contactsDiv);

  contentDiv.appendChild(contactUsDiv);
}