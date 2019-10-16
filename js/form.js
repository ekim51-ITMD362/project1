function init() {
    //add your javascrip between these two lines of code
    var button = document.getElementById('button');
    

    button.addEventListener('click', function () {
        alert("Thanks for signing up!");
    });
}
window.addEventListener('load', init);
