document.addEventListener('DOMContentLoaded', () => {
    console.log("Frontend scripts loaded successfully!");

    // Attach event listeners to all delete buttons
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Stop default button action

            const chatId = button.dataset.chatid;
            // Get the message content for the confirmation
            const chatItem = button.closest('.chat-item');
            const message = chatItem ? chatItem.querySelector('.chat-message').textContent : 'this chat';

            handleDelete(chatId, message);
        });
    });
});

/**
 * Handles the chat deletion process with a confirmation dialog.
 * @param {string} id The ID of the chat to delete.
 * @param {string} message The message content for display in the prompt.
 */
function handleDelete(id, message) {
    const isConfirmed = confirm(`Are you sure you want to delete the message: "${message.substring(0, 40)}..."? This action cannot be undone.`);

    if (isConfirmed) {
        // Find the hidden form in the DOM
        let form = document.getElementById('delete-form');
        if (!form) {
            // If the form doesn't exist, create it (it's only needed on index.ejs)
            form = document.createElement('form');
            form.setAttribute('id', 'delete-form');
            form.setAttribute('method', 'POST');
            document.body.appendChild(form);
        }

        // Set the action URL to match your backend POST route for deletion
        form.action = `/chats/${id}/delete`;

        // Submit the form
        form.submit();
    }
}