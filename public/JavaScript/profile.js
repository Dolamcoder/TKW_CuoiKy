
// Avatar dropdown
document.querySelector('.avartarButton').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.avartar')) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});

// Create Post Modal
function showCreatePost() {
    document.getElementById('createPostModal').style.display = 'flex';
}

function hideCreatePost() {
    document.getElementById('createPostModal').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('createPostModal');
    if (e.target === modal) {
        hideCreatePost();
    }
});
