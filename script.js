
document.getElementById('exploreButton').addEventListener('click', function() {
    alert('Redirecting to our Products page...');
  
  });
  
  document.getElementById('viewProductDetails').addEventListener('click', function() {
    alert('Showing detailed information about our VR products...');
  });
  
  document.getElementById('bookService').addEventListener('click', function() {
    alert('Redirecting to our Service Booking page...');
  });
  
  document.getElementById('contactButton').addEventListener('click', function() {
    alert('Opening the Contact Support form...');
  });
// Handle form submission
document.getElementById('submitForm').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Your message has been sent! Thank you for contacting us.');
  });
// Toggle live chat box visibility
document.getElementById('chatButton').addEventListener('click', function() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close the chat box
  document.getElementById('closeChat').addEventListener('click', function() {
    document.getElementById('chatBox').style.display = 'none';
  });
  document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${email}!`);
  });
// Add animation class on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach(function(element) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });
  function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    const products = ['VR Headset', 'VR Gloves', 'Gaming PC']; // Example products
    const filtered = products.filter(product => product.toLowerCase().includes(input));
    
    results.innerHTML = filtered.length > 0 ? filtered.join('<br>') : 'No products found';
  }
            
  