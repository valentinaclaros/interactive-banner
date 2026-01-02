// Shuffle Profile Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    
    // Category pills toggle
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            pills.forEach(p => p.classList.remove('pill-active'));
            this.classList.add('pill-active');
        });
    });

    // Select all checkbox
    const selectAllCheckbox = document.getElementById('selectAll');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const cardCheckboxes = document.querySelectorAll('.card-item input[type="checkbox"]');
            cardCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }

    // Card tabs switching
    const cardTabs = document.querySelectorAll('.card-tabs .tab');
    cardTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const parentTabs = this.closest('.card-tabs');
            parentTabs.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
            this.classList.add('tab-active');
        });
    });

    // Collapsible card toggle
    const expandButtons = document.querySelectorAll('.btn-expand');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const cardBody = card.querySelector('.card-body');
            if (cardBody) {
                cardBody.style.display = cardBody.style.display === 'none' ? 'block' : 'none';
            }
            this.textContent = cardBody && cardBody.style.display === 'none' ? '˃' : '˅';
        });
    });

});
