
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('active');
});

document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('active');
});

// Fermer le menu en cliquant en dehors thomas1

document.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});

function copyPromoCode() {
  navigator.clipboard.writeText('FIXD1').then(() => {
    const flashMessage = document.getElementById('flashMessage');
    flashMessage.style.display = 'block';
    
    setTimeout(() => {
      flashMessage.style.display = 'none';
    }, 2000);
  });
}


// Fonction pour afficher la promo 1xBet comme notification thomas3


function showPromoNotification() {
  const promoContainer = document.querySelector('.promo-1xbet');
  promoContainer.style.display = 'block';
  
  setTimeout(() => {
    promoContainer.style.display = 'none';
  }, 3000); 
}

// Afficher la notification immédiatement au chargement de la page thomas3
showPromoNotification();


setInterval(showPromoNotification, 10000);

function closePromoNotification() {
  const promoContainer = document.querySelector('.promo-1xbet');
  promoContainer.style.display = 'none';
}
