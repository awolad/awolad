/* eslint-disable no-undef */
$(function () {
    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator
    $('#contact-form').validator();

    // when the form is submitted
    $('#contact-form').on('submit', function (e) {
        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            // var url = "form/contact.php";
            // POST values in the background the the script URL
            // $.ajax({
            //     type: "POST",
            //     url: url,
            //     data: $(this).serialize(),
            //     success: function (data) {
            //         // data = JSON object that contact.php returns

            //         // we recieve the type of the message: success x danger and apply it to the 
            //         var messageAlert = 'alert-' + data.type;
            //         var messageText = data.message;

            //         // let's compose Bootstrap alert box HTML
            //         var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

            //         // If we have messageAlert and messageText
            //         if (messageAlert && messageText) {
            //             // inject the alert to .messages div in our form
            //             $('#contact-form').find('.messages').html(alertBox);
            //             // empty the form
            //             $('#contact-form')[0].reset();
            //         }
            //     }
            // });

            var dataArr = $(this).serializeArray()

            var inputNameVal = dataArr.find(data => data.name === 'InputName').value;
            var inputEmailVal = dataArr.find(data => data.name === 'InputEmail').value;
            var inputSubjectVal = dataArr.find(data => data.name === 'InputSubject').value;
            var inputMessageVal = dataArr.find(data => data.name === 'InputMessage').value;

            var successAlert = "Thank you for getting in touch! I'll get back to you shortly.";
            var errorAlert = 'Please try again later or send me an email directly at awolad1122@gmail.com';


            emailjs.send("service_7ut5egb", "template_k5a5zgh", {
                from_name: inputNameVal,
                to_name: "Awolad",
                subject: inputSubjectVal,
                message: inputMessageVal,
                reply_to: inputEmailVal,
            }).then(res => {
                // we recieve the type of the message: success x danger and apply it to the 
                var alertType = res.status === 200 ? 'success' : 'danger'
                var messageAlert = 'alert-' + alertType;
                var messageText = res.status === 200 ? successAlert : errorAlert;

                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                $('#contact-form').find('.messages').html(alertBox);

                if (res.status === 200) {
                    $('#contact-form')[0].reset();
                }
            }).catch(_ => {
                var messageAlert = 'alert-danger';
                var messageText = errorAlert;

                // let's compose Bootstrap alert box HTML
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                $('#contact-form').find('.messages').html(alertBox);
            })

            return false;
        }
    })
});
