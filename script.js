document.querySelector('header .container .fa-bars').addEventListener('click', function() {
    document.querySelector('header .container .sidebar').classList.toggle('active');
    this.classList.toggle('fa-xmark');
})
document.querySelector('header .container ul li:nth-child(2)').addEventListener('click', function() {
    window.location.href = 'pasien.html';
})
document.querySelector('header .container ul li:first-child').addEventListener('click', function() {
    window.location.href = 'index.html';
})
document.querySelector('header .container ul li:nth-child(3)').addEventListener('click', function() {
    window.location.href = 'pendaftaran.html';
})
document.querySelector('header .container ul li:nth-child(4)').addEventListener('click', function() {
    window.location.href = 'pasienBaru.html';
})
document.querySelector('header .container ul li:nth-child(5)').addEventListener('click', function() {
    window.location.href = 'apotek.html';
})
document.querySelector('header .container ul li:nth-child(6)').addEventListener('click', function() {
    window.location.href = 'laboratorium.html';
})
document.querySelector('header .container ul li:nth-child(7)').addEventListener('click', function() {
    window.location.href = 'laporan.html';
})