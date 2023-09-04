const accordionHeaders = document.querySelectorAll('.accordion_header');

accordionHeaders.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    accordionHeader.classList.toggle("active");

    const accordionBody = accordionHeader.nextElementSibling;
    const icon = accordionHeader.querySelector('.icon'); // Select the icon element

    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      icon.style.transform = 'rotateX(180deg)';
      accordionHeader.classList.remove("border-t"); // Remove the border-t class
    } else {
      accordionBody.style.maxHeight = 0;
      icon.style.transform = 'rotateX(0deg)';
      accordionHeader.classList.add("border-t"); // Add the border-t class
    }
  });
});

/// if you want close one and open second use this:
const accordionSingleHeaders = document.querySelectorAll('.accordionSingle_header');
const accordionSingleBodies = document.querySelectorAll('.accordionSingle_body');

accordionSingleHeaders.forEach((accordionSingleHeader, index) => {
  accordionSingleHeader.addEventListener("click", event => {
    // Close previously opened accordion body
    accordionSingleBodies.forEach((body, idx) => {
      if (idx !== index) {
        body.style.maxHeight = 0;
        accordionSingleHeaders[idx].classList.remove("active");
        const icon = accordionSingleHeaders[idx].querySelector('.icon');
        icon.style.transform = 'rotateX(0deg)';
      }
    });

    // Toggle the clicked accordion header and body
    accordionSingleHeader.classList.toggle("active");
    const accordionSingleBody = accordionSingleHeader.nextElementSibling;
    const icon = accordionSingleHeader.querySelector('.icon');

    if (accordionSingleHeader.classList.contains("active")) {
      accordionSingleBody.style.maxHeight = accordionSingleBody.scrollHeight + "px";
      icon.style.transform = 'rotateX(180deg)';
    } else {
      accordionSingleBody.style.maxHeight = 0;
      icon.style.transform = 'rotateX(0deg)';
    }
  });
});
