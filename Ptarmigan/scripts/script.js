//import css
import '../Styles/style.css';
// On click event for hiding the mobile menu when a link is clicked.
$('.nav-link').on('click', function () {
  $('#offcanvasNavbar').offcanvas('hide');
});

// On click event for calling a phone number (e.g. on mobile devices this should open the default phone app).
$('.call-box').on('click', function () {
  var phoneNumber = $(this).find('.phone-number').text();
  window.location.href = "tel:" + phoneNumber;
});
