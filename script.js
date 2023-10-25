let isMenuVisible = false;

function mobileMenu() {
  const nav = document.querySelector('nav');
  const navLinks = nav.querySelectorAll('a');

  if(isMenuVisible){;
    nav.style.top = "-120%";
    isMenuVisible = false;
  }
  else{
    nav.style.top = "0";
    isMenuVisible = true;
  }
}
/*
  if(isMenuVisible){;
    navLinks.forEach(link => {
      link.style.display = 'none';
    });
    nav.style.removeProperty('height');
    isMenuVisible = false;
  }
  else{
    navLinks.forEach(link => {
      link.style.display = 'block';
    });
    nav.style.height = "100vh";
    isMenuVisible = true;
  }
}
*/