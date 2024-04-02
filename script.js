//SGN your code here!
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    const listItemHeight = 50; // Assuming each list item has a height of 50px
    const numItemsToAdd = 2; // Number of items to add when reaching the end

    // Function to add new list items
    function addItems() {
        for (let i = 0; i < numItemsToAdd; i++) {
            const li = document.createElement('li');
            li.textContent = 'Item ' + (list.children.length + 1);
            list.appendChild(li);
        }
    }

    // Event listener for scrolling
    list.addEventListener('scroll', function() {
        // Calculate the total height of the list
        const listHeight = list.scrollHeight;
        // Calculate the current scroll position
        const scrollTop = list.scrollTop;
        // Calculate the height of the visible portion of the list
        const listVisibleHeight = list.offsetHeight;

        // Check if the user has scrolled to the bottom of the list
        if (scrollTop + listVisibleHeight >= listHeight) {
            // Add more items
            addItems();
        }
    });

    // Add initial list items
    addItems();
});