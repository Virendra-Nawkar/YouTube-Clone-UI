<script>
    // Select the menu button and the lists element
    const menuButton = document.getElementById('menuButton');
    const lists = document.querySelector('.lists');

    // Add click event listener to toggle visibility
    menuButton.addEventListener('click', () => {
        lists.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
</script>
