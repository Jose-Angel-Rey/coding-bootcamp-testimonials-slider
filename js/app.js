const testimonialAvatar = document.querySelector(".student-photo");

const testimonialContent = document.querySelector(
  ".testimonial-content-container"
);

function changeAvatar() {
  // Change avatar image
  testimonialAvatar.src = "../images/image-john.jpg";

  // Change alt attribute from avatar image
  testimonialAvatar.alt = "John Tarkpor";

  // Hidde
  console.log(testimonialContent.children[0].classList.add("hidden"));

  // Show
  console.log(testimonialContent.children[1].classList.remove("hidden"));
}
// changeAvatar();
