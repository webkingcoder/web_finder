// var input = document.getElementById('search');
// input.addEventListener('keydown', function (event) {
//     if (event.key === 'enter') {
//         event.preventDefault();
//         document.getElementById('submit').click().submit();
//     }
// })

function submit() {
    document.getElementById('content').innerHTML = ' '; var val = document.getElementById('search').value;
    var newElement = document.createElement('script'); newElement.src = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDMs8_h6aJNg1qb_1JG_pAueStDJyqrT30&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${val}&callback=hndlr`
    newElement.id = 'mainscript'; document.body.appendChild(newElement);
}