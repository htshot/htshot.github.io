/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', () => {
let containers = document.querySelectorAll('.card');

      containers.forEach(containers => {
      containers.addEventListener('mouseover', () => {
        containers.style.transform = 'scale(1.2)';
      });

      containers.addEventListener('mouseout', () => {
        containers.style.transform = 'scale(1)';
      });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.nav');
        
        if (window.pageYOffset > 0) {
          navbar.classList.add('nav-scrolled');
        } else {
          navbar.classList.remove('nav-scrolled');
        }
      });
});