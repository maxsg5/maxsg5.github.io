// On click event for hiding the mobile menu when a link is clicked.
$('.nav-link').on('click', function () {
    $('#offcanvasNavbar').offcanvas('hide');
});
  

$('.call-box').on('click', function() {
  var phoneNumber = $('.phone-number').text();
  window.location.href = "tel:" + phoneNumber;
});
