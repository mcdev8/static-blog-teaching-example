// Wait for DOM to render before doing anything...
document.addEventListener("DOMContentLoaded", () => {
    // Get the HTML elements:
    const commentList = document.getElementById('comment-list');
    const comment = document.getElementById('comment');
    const form = document.getElementById('comment-form');
    const name = document.getElementById('name');
    
    // Wait for the user to submit the form...
    form.addEventListener('submit', function(event) {
        // NOTE: Normally, submitting the form will refresh the page.
        // We don't want that. Instead, we can use .preventDefault()
        // to prevent the page from reloading.
        event.preventDefault();
        // Create a new <li> element:
        const newComment = document.createElement('li');
        // Add the comment CSS class to the <li> element:
        newComment.classList.add('comment');
        // Add the comment to the <li> element:
        newComment.innerHTML = `<b>${name.value}</b>: ${comment.value}`;
        // Example of what we created:
        // <li>
        //    <b>McDev</b>: Hello world!
        // </li>
        // Next, we add the <li> element we just created to the page.
        commentList.appendChild(newComment);
        // Clears the text from the form.
        form.reset();
    });
})
