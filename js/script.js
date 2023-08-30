const accordionHeaders = document.querySelectorAll('.accordion_header');

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    accordionHeader.classList.toggle("active");

    const accordionBody = accordionHeader.nextElementSibling;
    const icon = accordionHeader.querySelector('.icon'); // Select the icon element

    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      icon.style.transform = 'rotateX(180deg)';
    } else {
      accordionBody.style.maxHeight = 0;
      icon.style.transform = 'rotateX(0deg)';
    }
  });
});

/// if you want close one and open second use this:
// const accordionHeaders = document.querySelectorAll('.accordion_header');
// const accordionBodies = document.querySelectorAll('.accordion_body');
//
// accordionHeaders.forEach((accordionHeader, index) => {
//   accordionHeader.addEventListener("click", event => {
//     // Close previously opened accordion body
//     accordionBodies.forEach((body, idx) => {
//       if (idx !== index) {
//         body.style.maxHeight = 0;
//         accordionHeaders[idx].classList.remove("active");
//         const icon = accordionHeaders[idx].querySelector('.icon');
//         icon.style.transform = 'rotateX(0deg)';
//       }
//     });
//
//     // Toggle the clicked accordion header and body
//     accordionHeader.classList.toggle("active");
//     const accordionBody = accordionHeader.nextElementSibling;
//     const icon = accordionHeader.querySelector('.icon');
//
//     if (accordionHeader.classList.contains("active")) {
//       accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
//       icon.style.transform = 'rotateX(180deg)';
//     } else {
//       accordionBody.style.maxHeight = 0;
//       icon.style.transform = 'rotateX(0deg)';
//     }
//   });
// });
