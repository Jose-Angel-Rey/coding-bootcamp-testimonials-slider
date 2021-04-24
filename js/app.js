const testimonialAvatar = document.querySelector(".student-photo");

const testimonialContent = document.querySelector(
  ".testimonial-content-container");

const nextTestimonial = document.querySelector(".icon-next")

const prevTestimonial = document.querySelector(".icon-prev")

nextTestimonial.addEventListener("click", () => {
    // Change avatar image
  testimonialAvatar.src = "../images/image-john.jpg";

  // Change alt attribute from avatar image
  testimonialAvatar.alt = "John Tarkpor";

  // Hidde
  console.log(testimonialContent.children[0].classList.add("hidden"));

  // Show
  console.log(testimonialContent.children[1].classList.remove("hidden"));
  })

prevTestimonial.addEventListener("click", () => {
    // Change avatar image
  testimonialAvatar.src = "../images/image-tanya.jpg";

  // Change alt attribute from avatar image
  testimonialAvatar.alt = "Tanya Sinclair";

  // Hidde
  console.log(testimonialContent.children[1].classList.add("hidden"));

  // Show
  console.log(testimonialContent.children[0].classList.remove("hidden"));
  })
