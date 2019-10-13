
// for logging in
// toggle between hiding and showing the dropdown content
function loginFunction() {
    document.getElementById("my-dropdown").classList.toggle('show');
}
// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.login')){
//         var dropdowns = document.getElementByClass('login-content');
//         var i;
//         for (i=0;i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

// show google map
function initMap() {
    var serangoon = { lat : 1.364249, lng : 103.865920};
    var map = new google.maps.Map(
        document.getElementById('location'), {zoom:17 , center:serangoon})
    var marker = new google.maps.Marker({position: serangoon, map: map});
}