document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('btn-click').addEventListener('click', function () {
        document.getElementById('output').textContent = 'Has hecho clic en el botón';
    });


    document.getElementById('input-text').addEventListener('input', function (event) {
        document.getElementById('output').textContent = 'Has escrito: ' + event.target.value;
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('output').textContent = 'Presionaste la tecla Escape';
        }
    });
});
