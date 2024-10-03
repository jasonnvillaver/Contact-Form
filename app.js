     
     (function(){
        emailjs.init(iiGwi6VgI5wyjN2tb);
    })();
 
 
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Send the email using the form data
        console.log(this)
        emailjs.sendForm(service_vx29a4t, template_53slcp5, this)
            .then(function() {
                alert('Message Sent Successfully!');
            }, function(error) {
                alert('Failed to send the message: ' + JSON.stringify(error));
            });
    });
 
