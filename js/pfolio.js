//                 // toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuicon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// //    scroll sections active link
// let section = document.querySelectorAll('section'); 
// let navlinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//              let top = window.scrollY;
//              let offset = sec.offsetTop - 150;
//              let height = sec.offsetHeight;
//              let id = sec.getAttribute('id');
        
//              if(top >= offset && top < offset + height) {
//                  navlinks.forEach(links => {
//                     links.classlist.remove('active');
//                     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//              });                                
//         };
//     });
//     // stick bar
//     let header = document.querySelector('header');
    
//     header.classList.toggle('sticky', window.scrollY > 100);
    
//     // remove toggle icon and navbar when click navbar link (scroll)
//     menuicon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

    
//  toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // scroll sections active link
// let sections = document.querySelectorAll('section'); 
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
        
//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
//         };
//     });

//     // stick bar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // remove toggle icon and navbar when click navbar link (scroll)
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };



// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        };
    });

    // stick bar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


















