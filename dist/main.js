(()=>{"use strict";function e(){document.querySelector("#home-btn").style.backgroundColor="rgb(55, 80, 4)",document.querySelector("#menu-btn").style.backgroundColor="yellowgreen",document.querySelector("#contact-btn").style.backgroundColor="yellowgreen";let e=document.querySelector("#content"),n=document.createElement("div");n.className="headline-image";let t=document.createElement("div");t.className="headline",t.innerHTML="<h1>Smile Resto!</h1><div>A hungry man is an angry man. \n                            So come eat and return with a big smile ^__^</div>";let o=document.createElement("div");o.className="headline-img";let c=document.createElement("img");c.src="./images/vegetables-set-left-black-slate.jpg",n.appendChild(t),o.appendChild(c),n.appendChild(o),n.appendChild(o),e.appendChild(n)}function n(){document.querySelector("#content").innerHTML=""}document.addEventListener("load",(e(),document.querySelector("#home-btn").addEventListener("click",(()=>{n(),e()})),document.querySelector("#menu-btn").addEventListener("click",(()=>{n(),function(){let e=document.querySelector("#content");document.querySelector("#menu-btn").style.backgroundColor="rgb(55, 80, 4)",document.querySelector("#home-btn").style.backgroundColor="yellowgreen",document.querySelector("#contact-btn").style.backgroundColor="yellowgreen";let n=document.createElement("div");n.className="menu-list",[{name:"spicy food",description:"description spicy food",price:"$8",img:"./images/spicy-food-menu.jpg"},{name:"healthy food",description:"description healhty food",price:"$10",img:"./images/healthy-food-menu.jpg"},{name:"Fresh salad",description:"description fresh salad food",price:"$13",img:"./images/fresh-salad-menu.jpg"},{name:"spicy food",description:"description spicy food",price:"$8",img:"./images/spicy-food-menu.jpg"},{name:"healthy food",description:"description healhty food",price:"$10",img:"./images/healthy-food-menu.jpg"},{name:"Fresh salad",description:"description fresh salad food",price:"$13",img:"./images/fresh-salad-menu.jpg"}].forEach((e=>{let t=document.createElement("div");t.className="menu-item";let o=document.createElement("div");o.className="menu-img";let c=document.createElement("img");c.src=e.img,o.appendChild(c);let d=document.createElement("div");d.className="menu-details";let l=document.createElement("div");l.innerHTML=`<h3>${e.name}</h3>`;let i=document.createElement("div");i.innerHTML=`<p>${e.description}</p>`;let a=document.createElement("div");a.innerHTML=`<strong>${e.price}</strong>`,d.appendChild(l),d.appendChild(i),d.appendChild(a),t.appendChild(o),t.appendChild(d),n.appendChild(t)})),e.appendChild(n)}()})),void document.querySelector("#contact-btn").addEventListener("click",(()=>{n(),function(){document.querySelector("#contact-btn").style.backgroundColor="rgb(55, 80, 4)",document.querySelector("#home-btn").style.backgroundColor="yellowgreen",document.querySelector("#menu-btn").style.backgroundColor="yellowgreen";let e=document.querySelector("#content"),n=document.createElement("div");n.className="contact-us";let t=document.createElement("div");t.className="heading",t.innerText="Contact Us";let o=document.createElement("div");o.className="contacts";let c=document.createElement("div");c.className="phone-nbr",c.innerHTML="<p><b><i>Tel</i></b>: (123) 245 456 789</p>";let d=document.createElement("div");d.className="fax-nbr",d.innerHTML="<p><b><i>Fax</i></b>: 0123 137 5041 </p>";let l=document.createElement("div");l.className="email",l.innerHTML="<p><b><i>Email</i></b>: enjoy@smileresto.com</p>",o.appendChild(c),o.appendChild(d),o.appendChild(l),n.appendChild(t),n.appendChild(o),e.appendChild(n)}()}))))})();