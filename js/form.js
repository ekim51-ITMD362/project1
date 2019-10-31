function init() {
    var button = document.getElementById('button');
    

    button.addEventListener('click', function () {
        alert("Thanks for signing up!");
    });
}
window.addEventListener('load', init);
