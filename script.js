document.addEventListener('DOMContentLoaded', function() {
    // Product card click handler
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            alert(You clicked on ${productName}. In a real application, this would navigate to the product page.);
        });
    });
    
    // Category item click handler
    const categories = document.querySelectorAll('.categories-list li');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.textContent;
            alert(You selected ${categoryName} category. In a real application, this would filter products.);
        });
    });
    
    // Footer navigation items
    const footerLinks = document.querySelectorAll('.footer-section ul li');
    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.textContent;
            alert(You clicked on ${linkText}. In a real application, this would navigate to the appropriate page.);
        });
    });
    
    // Email subscription handler
    const emailInput = document.querySelector('.email-input input');
    const emailButton = document.querySelector('.email-input button');
    
    const handleSubscribe = () => {
        if (emailInput.value.includes('@')) {
            alert('Thank you for subscribing! Check your email for your 50% discount code.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    };
    
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubscribe();
        }
    });
    
    emailButton.addEventListener('click', handleSubscribe);
});