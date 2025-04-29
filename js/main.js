// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    console.log('HTML Project initialized successfully!');
    
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.company-block__read-more');
    
    // Add click event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the content container
            const contentContainer = this.parentElement.querySelector('.company-block__content');
            
            // Toggle the expanded class
            contentContainer.classList.toggle('expanded');
            
            // Toggle the icon rotation
            const icon = this.querySelector('svg');
            icon.classList.toggle('rotated');
            
            // Update button text
            if (contentContainer.classList.contains('expanded')) {
                this.childNodes[0].nodeValue = 'Read Less ';
            } else {
                this.childNodes[0].nodeValue = 'Read More ';
            }
        });
    });
}); 