let testimonialAvatar = document.querySelector(".student-photo");

let testimonialContent = document.querySelector(
  ".testimonial-content-container"
);

let nextTestimonial = document.querySelector(".icon-next");

let prevTestimonial = document.querySelector(".icon-prev");

nextTestimonial.addEventListener("click", checkClass);
prevTestimonial.addEventListener("click", checkClass);

function checkClass() {
  if (testimonialContent.children[0].classList.contains("hidden")) {
    // Show Tanya testimonial
    console.log(testimonialContent.children[0].classList.remove("hidden"));

    // Hidde John testimonial
    console.log(testimonialContent.children[1].classList.add("hidden"));

    // Change avatar image
    testimonialAvatar.src = "../images/image-tanya.jpg";
  } else {
    // Show John testimonial
    console.log(testimonialContent.children[1].classList.remove("hidden"));

    // Hidde Tanya testimonial
    console.log(testimonialContent.children[0].classList.add("hidden"));

    // Change avatar image
    testimonialAvatar.src = "../images/image-john.jpg";
  }
}
