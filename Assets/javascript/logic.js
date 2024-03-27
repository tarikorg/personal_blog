// Toggle between light and dark mode
 const toggleModeButton = document.getElementById('toggleMode');
 const body = document.body;

 toggleModeButton.addEventListener('click', function() {
     // add dark mode class on it, so in css when its dark mode class it will different attributes
     body.classList.toggle('dark-mode'); 
 });
