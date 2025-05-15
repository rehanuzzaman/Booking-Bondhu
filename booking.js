document.addEventListener('DOMContentLoaded', function() {
    // Get the modal and its elements
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalButton = document.getElementById('modalButton');
    const closeModal = document.querySelector('.close-modal');
    
    // Form submission handler
    const protestForm = document.getElementById('protestForm');
    let submissionCount = 0;
    
    protestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submissionCount++;
        
        // Get form values
        const protestDate = document.getElementById('protestDate').value;
        const dateObj = new Date(protestDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Show appropriate message based on submission count
        if (submissionCount === 1) {
            modalTitle.textContent = 'Booking Conflict';
            modalMessage.textContent = `Another CHAGOLER TIN NUMBER BACCHA has already booked Shahbag on ${formattedDate}. Please choose another day.`;
        } else {
            modalTitle.textContent = 'Shahbag is Always Awake';
            modalMessage.textContent = 'SHAHBAG KOKHONO GHUMAY NA, TUMI GHUMAO';
        }
        
        // Show modal
        modal.style.display = 'block';
        
        // Reset form
        protestForm.reset();
    });
    
    // Close modal when clicking X or OK button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('protestDate').min = today;
    
    // Navigation active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});