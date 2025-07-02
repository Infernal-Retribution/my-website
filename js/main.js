document.getElementById ('contact-form').addEventListener
('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').Value();
    const email = document.getElementById('email').value();

    if (!name || !email)
    {
        alert('Please fill in all fields.');
        return;
    }

    alert (`Thanks yo, ${name}!The message will be sent.`);
    this.reset();

});
