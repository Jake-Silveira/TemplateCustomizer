/* - - - Startup Animation - - - */    
    const brand = document.getElementById('brand');
    const navMenu = document.getElementById('nav-menu');
    const startupDisplay = document.getElementById('startupDisplay'); 
    const navLogin = document.getElementById('navLogin'); 

    document.addEventListener('DOMContentLoaded', () => {
        startupAnimation();
    });

    function startupAnimation(){
        brand.animate([
        { transform: 'translate(500px,300px)'},
        { transform: 'translate(0)'}
      ], {
        duration: 1500, // 2.5 seconds
        easing: 'ease-in',
        fill: 'forwards'
      });

      navMenu.animate([
        { transform: 'translateY(300px)'},
        { transform: 'translateY(0)'}
      ], {
        duration: 1500, // 2.5 seconds
        easing: 'ease-in',
        fill: 'forwards'
      });

      navLogin.animate([
        { transform: 'translate(-500px,300px)'},
        { transform: 'translate(0)'}
      ], {
        duration: 1500, // 2.5 seconds
        easing: 'ease-in',
        fill: 'forwards'
      });

      startupDisplay.animate([
        { opacity: 1},
        { opacity: 0}
      ], {
        duration: 2000, // 4.5 seconds
        easing: 'ease-out',
        delay: 500, // 0.5 second delay
        fill: 'forwards'
      });
      
      setTimeout(function() {
        startupDisplay.style.display = "none";
      }, 2000);

    };