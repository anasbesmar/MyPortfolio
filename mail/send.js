
var form = document.getElementById("contactForm");

function submitForm(event) {
  event.preventDefault();
  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _subject = document.getElementById("subject").value;
  var _message = document.getElementById("message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "portfolio.besmar@gmail.com",
    Password: "ADD897F88E98F899DA5A8CA7F01C189B795A",
    To: "anas.bsr.2000@gmail.com",
    Port: "2525",
    From: "portfolio.besmar@gmail.com",
    Subject: "The Name : " + _name + "   " + _subject,
    Body: "The Email : " + _email + "    " + _message,
  }).then(function (message) {
    if (message == "OK") {
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-success").append(
        "<strong>Your message has been sent. </strong>"
      );
      $("#success > .alert-success").append("</div>");
      $("#contactForm").trigger("reset");
    } else {
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-danger").append(
        $("<strong>").text(
          "Sorry " +
            _name +
            ", it seems that our mail server is not responding. Please try again later!"
        )
      );
      $("#success > .alert-danger").append("</div>");
      $("#contactForm").trigger("reset");
    }
  });
}
form.addEventListener("submit", submitForm);

/* $(function() {
    $('form#contactForm').on('submit', function(e) {
        $.post(asd3(), $(this).serialize(), function (data) {
            // This is executed when the call to mail.php was succesful.
            // 'data' contains the response from the request
        }).error(function() {
            // This is executed when the call to mail.php failed.
        });
        e.preventDefault();
    });
});



 $.ajax({
    url: asd2(),
    type: "POST",
    data: {
      name: 'name2',
      email: 'email2',
      subject: 'subject2',
      message: 'message2',
    },
    cache: false,
    success: function () {
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-success").append(
        "<strong>Your message has been sent. </strong>"
      );
      $("#success > .alert-success").append("</div>");
      $("#contactForm").trigger("reset");
    },
    error: function () {
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-danger").append(
        $("<strong>").text(
          "Sorry " +
            name2 +
            ", it seems that our mail server is not responding. Please try again later!"
        )
      );
      $("#success > .alert-danger").append("</div>");
      $("#contactForm").trigger("reset");
    },
    complete: function () {
      setTimeout(function () {
        $this.prop("disabled", false);
      }, 1000);
    },
  });



function asd3() {
   var name2 = $("input#name").val();
  var email2 = $("input#email").val();
  var subject2 = $("input#subject").val();
  var message2 = $("textarea#message").val();
  $.ajax({
    url: asd2(),
    type: "POST",
    data: {
      name: name2,
      email: email2,
      subject: subject2,
      message: message2,
    },
    cache: false,
    success: function () {
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-success").append(
        "<strong>Your message has been sent. </strong>"
      );
      $("#success > .alert-success").append("</div>");
      $("#contactForm").trigger("reset");
    },
    error: function () {
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-danger").append(
        $("<strong>").text(
          "Sorry " +
            name2 +
            ", it seems that our mail server is not responding. Please try again later!"
        )
      );
      $("#success > .alert-danger").append("</div>");
      $("#contactForm").trigger("reset");
    },
    complete: function () {
      setTimeout(function () {
        $this.prop("disabled", false);
      }, 1000);
    },
  });
}
 */
