<script src="/prevent.js"></script>

const prevent = document.getElementById('send');

prevent.addEventListener('click', function (e) {
    e.preventDefault();
});