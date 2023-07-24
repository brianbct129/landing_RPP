/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    nav.classList.add('shadow');
});

// whatsapp
function sendMessageToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const phoneNumber = '6281144608008'; // Ganti dengan nomor WhatsApp yang dituju

    // Format pesan sesuai keinginan Anda
    const whatsappMessage = `Halo, nama saya *${name}*. Email saya adalah *${email}* dan silahkan menghubungi saya di HP saya *${phone}*.\n\nPesan: ${message}`;

    // Ganti 'en' dengan kode bahasa yang sesuai jika diperlukan
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Buka tautan WhatsApp di jendela baru
    window.open(whatsappURL, '_blank');
}

// Menghubungkan fungsi sendMessageToWhatsApp dengan form submission
document.getElementById('contactFormFooter').addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessageToWhatsApp();
});