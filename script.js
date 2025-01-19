document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('active');
});

document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('active');
});

// Fermer le menu en cliquant en dehors
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

// Fonction pour afficher la promo 1xBet comme notification
function showPromoNotification() {
  const promoContainer = document.querySelector('.promo-1xbet');
  promoContainer.style.display = 'block';
  
  setTimeout(() => {
    promoContainer.style.display = 'none'; // Masque la notification après 3 secondes
  }, 3000);
}

// Afficher la notification 3 secondes après le chargement de la page
window.addEventListener('load', function() {
  setTimeout(showPromoNotification, 3000);
});

// Optionnel : Afficher la notification toutes les 10 secondes après la première apparition
setInterval(showPromoNotification, 10000);
