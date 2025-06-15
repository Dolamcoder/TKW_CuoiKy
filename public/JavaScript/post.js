document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const postCreate = document.getElementById('postCreate');
    const createPostModal = document.getElementById('createPostModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const postBtn = document.querySelector('.modal-footer .btn-accent');
    const postTextarea = document.querySelector('.modal-body textarea');
    const visibilitySelect = document.querySelector('.post-user-info select');
    const postsContainer = document.querySelector('.col-md-8');
    const username = localStorage.getItem('username') || 'User';
    
    // Add styles for emoji picker, GIF selector, and toast
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .modal-body {
            max-height: 60vh;
            overflow-y: auto;
        }
        
        .image-preview-container {
            margin-top: 10px;
            position: relative;
            max-height: 250px;
            overflow: hidden;
        }
        
        .image-preview-container img {
            max-width: 100%;
            border-radius: 8px;
        }
        
        .emoji-picker {
            display: none;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 10px;
            margin-top: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .emoji-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 5px;
        }
        
        .emoji-item {
            font-size: 1.5rem;
            cursor: pointer;
            text-align: center;
            padding: 5px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }
        
        .emoji-item:hover {
            background-color: #f3f4f6;
        }
        
        .gif-selector {
            display: none;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 10px;
            margin-top: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .gif-search {
            display: flex;
            margin-bottom: 10px;
        }
        
        .gif-search input {
            flex: 1;
            padding: 8px;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            margin-right: 5px;
        }
        
        .gif-search button {
            padding: 8px 12px;
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .gif-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .gif-item {
            cursor: pointer;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .gif-item img {
            width: 100%;
            height: auto;
        }
        
        .modal-footer {
            position: sticky;
            bottom: 0;
            background: white;
            padding: 15px;
            border-top: 1px solid #e5e7eb;
            z-index: 10;
        }
        
        .post-header {
            position: relative;
        }
        
        .post-actions {
            margin-left: auto;
        }
        
        .post-menu-btn {
            background: none;
            border: none;
            font-size: 1rem;
            color: #6b7280;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 50%;
        }
        
        .post-menu-btn:hover {
            background-color: #f3f4f6;
        }
        
        .post-dropdown {
            display: none;
            position: absolute;
            right: 10px;
            top: 100%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.15);
            z-index: 100;
            min-width: 150px;
        }
        
        .post-dropdown.show {
            display: block;
        }
        
        .post-dropdown button {
            display: block;
            width: 100%;
            text-align: left;
            padding: 10px 15px;
            border: none;
            background: none;
            color: #6b7280;
            cursor: pointer;
        }
        
        .post-dropdown button:hover {
            background-color: #f3f4f6;
            color: #ef4444;
        }
        
        .gif-image, .post-image {
            max-height: 400px;
            object-fit: contain;
            width: 100%;
        }
        
        .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .toast.show {
            opacity: 1;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Image upload variables
    let selectedImage = null;
    let selectedGif = null;
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.style.display = 'none';
    document.body.appendChild(imageInput);
    
    // Image preview container
    const imagePreviewContainer = document.createElement('div');
    imagePreviewContainer.className = 'image-preview-container';
    imagePreviewContainer.style.display = 'none';
    
    const imagePreview = document.createElement('img');
    imagePreview.style.maxWidth = '100%';
    imagePreview.style.borderRadius = '8px';
    
    const removeImageBtn = document.createElement('button');
    removeImageBtn.innerHTML = '<i class="fas fa-times"></i>';
    removeImageBtn.className = 'remove-image-btn';
    removeImageBtn.style.position = 'absolute';
    removeImageBtn.style.top = '10px';
    removeImageBtn.style.right = '10px';
    removeImageBtn.style.background = 'rgba(0,0,0,0.6)';
    removeImageBtn.style.color = 'white';
    removeImageBtn.style.border = 'none';
    removeImageBtn.style.borderRadius = '50%';
    removeImageBtn.style.width = '30px';
    removeImageBtn.style.height = '30px';
    removeImageBtn.style.cursor = 'pointer';
    
    imagePreviewContainer.appendChild(imagePreview);
    imagePreviewContainer.appendChild(removeImageBtn);
    
    // Create emoji picker
    const emojiPicker = document.createElement('div');
    emojiPicker.className = 'emoji-picker';
    emojiPicker.innerHTML = '<div class="emoji-grid"></div>';
    
    // Common emojis
    const emojis = [
        '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂',
        '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩',
        '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛',
        '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
        '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄',
        '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
        '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴',
        '😵', '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐'
    ];
    
    // Populate emoji grid
    const emojiGrid = emojiPicker.querySelector('.emoji-grid');
    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.className = 'emoji-item';
        emojiItem.textContent = emoji;
        emojiItem.addEventListener('click', () => {
            const cursorPos = postTextarea.selectionStart;
            const textBefore = postTextarea.value.substring(0, cursorPos);
            const textAfter = postTextarea.value.substring(cursorPos);
            postTextarea.value = textBefore + emoji + textAfter;
            const newCursorPos = cursorPos + emoji.length;
            postTextarea.focus();
            postTextarea.setSelectionRange(newCursorPos, newCursorPos);
        });
        emojiGrid.appendChild(emojiItem);
    });
    
    // Create GIF selector
    const gifSelector = document.createElement('div');
    gifSelector.className = 'gif-selector';
    gifSelector.innerHTML = `
        <div class="gif-search">
            <input type="text" placeholder="Tìm GIF...">
            <button>Tìm</button>
        </div>
        <div class="gif-grid"></div>
    `;
    
    // Sample GIFs
    const sampleGifs = [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3N0cnFnZTRudnV2cm12M2RxZGQxeTlhaTl6MzVwbnRlMzVyZGl3OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/chzz1FQgqhytWRWbp3/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG4wbGFyYjJ5YjY1aGZlamd0MnBoNjlvaDMzZTBkNnVkODltYmV2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGI8GoTL7d0uGGY/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZ0NGsyeGk3cmVmdnlqeXV2ODg0OW16c3o3ejd3YnUzOG5wdW92OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lQ1nXVKYI5BN6pI40j/giphy.gif',
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjV6MWV0ZjBsbmUwODFsNzNkZWJ2MHQ1b2I1Nm80ZmhyM3FmbmhwNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hVYVYZZBgF50k/giphy.gif'
    ];
    
    // Populate GIF grid
    const gifGrid = gifSelector.querySelector('.gif-grid');
    sampleGifs.forEach(url => {
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';
        const gifImg = document.createElement('img');
        gifImg.src = url;
        gifImg.alt = 'GIF';
        gifItem.appendChild(gifImg);
        gifItem.addEventListener('click', () => {
            selectedGif = url;
            selectedImage = null;
            imagePreview.src = url;
            imagePreviewContainer.style.display = 'block';
            gifSelector.style.display = 'none';
        });
        gifGrid.appendChild(gifItem);
    });
    
    // Add everything to the modal body
    if (document.querySelector('.modal-body')) {
        document.querySelector('.modal-body').appendChild(imagePreviewContainer);
        document.querySelector('.modal-body').appendChild(emojiPicker);
        document.querySelector('.modal-body').appendChild(gifSelector);
    }
    
    // Initialize posts from localStorage
    let posts = JSON.parse(localStorage.getItem('userPosts')) || [];
    
    // Render existing posts on page load
    renderPosts();
    
    // Show create post modal
    window.showCreatePost = function() {
        createPostModal.style.display = 'flex';
        postTextarea.focus();
    };
    
    // Hide create post modal
    window.hideCreatePost = function() {
        createPostModal.style.display = 'none';
        emojiPicker.style.display = 'none';
        gifSelector.style.display = 'none';
        resetPostForm();
    };
    
    // Close modal if clicked outside content
    if (createPostModal) {
        createPostModal.addEventListener('click', function(e) {
            if (e.target === createPostModal) {
                hideCreatePost();
            }
        });
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', hideCreatePost);
        }
    }
    
    // Handle image selection
    const imageBtn = document.querySelector('.post-options-modal .btn-option:nth-child(1)');
    if (imageBtn) {
        imageBtn.addEventListener('click', function() {
            selectedGif = null;
            gifSelector.style.display = 'none';
            emojiPicker.style.display = 'none';
            imageInput.click();
        });
    }
    
    // Handle emoji selection
    const emojiBtn = document.querySelector('.post-options-modal .btn-option:nth-child(2)');
    if (emojiBtn) {
        emojiBtn.addEventListener('click', function() {
            emojiPicker.style.display = emojiPicker.style.display === 'block' ? 'none' : 'block';
            gifSelector.style.display = 'none';
        });
    }
    
    // Handle GIF selection
    const gifBtn = document.querySelector('.post-options-modal .btn-option:nth-child(4)');
    if (gifBtn) {
        gifBtn.addEventListener('click', function() {
            gifSelector.style.display = gifSelector.style.display === 'block' ? 'none' : 'block';
            emojiPicker.style.display = 'none';
        });
    }
    
    // Process selected image
    imageInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            selectedImage = e.target.files[0];
            selectedGif = null;
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreviewContainer.style.display = 'block';
            };
            reader.readAsDataURL(selectedImage);
        }
    });
    
    // Remove selected image/gif
    removeImageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        selectedImage = null;
        selectedGif = null;
        imagePreviewContainer.style.display = 'none';
        imageInput.value = '';
    });
    
    // Search GIFs
    const gifSearchBtn = gifSelector.querySelector('.gif-search button');
    const gifSearchInput = gifSelector.querySelector('.gif-search input');
    gifSearchBtn.addEventListener('click', function() {
        const searchTerm = gifSearchInput.value.trim();
        if (searchTerm) {
            alert(`Tìm kiếm GIF cho từ khóa: "${searchTerm}"\n\nChức năng này sẽ kết nối với API GIF trong môi trường thực tế.`);
        }
    });
    
    // Create new post
    if (postBtn) {
        postBtn.addEventListener('click', function() {
            const postText = postTextarea.value.trim();
            const visibility = visibilitySelect.value;
            if (!postText && !selectedImage && !selectedGif) {
                alert('Vui lòng nhập nội dung bài viết, thêm hình ảnh hoặc GIF!');
                return;
            }
            
            let newPost = {
                id: Date.now().toString(),
                content: postText,
                image: null,
                isGif: false,
                visibility: visibility,
                author: username,
                timestamp: Date.now(),
                likes: 0,
                isLiked: false
            };
            
            if (selectedImage) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    newPost.image = e.target.result;
                    newPost.isGif = false;
                    addPost(newPost);
                };
                reader.readAsDataURL(selectedImage);
            } else if (selectedGif) {
                newPost.image = selectedGif;
                newPost.isGif = true;
                addPost(newPost);
            } else {
                addPost(newPost);
            }
            
            hideCreatePost();
        });
    }
    
    // Add post to localStorage and render it
    function addPost(post) {
        posts.unshift(post); // Ensure new post is added to the beginning
        localStorage.setItem('userPosts', JSON.stringify(posts));
        renderPosts();
    }
    
    // Delete post
    function deletePost(postId) {
        const postIndex = posts.findIndex(p => p.id === postId);
        if (postIndex === -1) {
            console.error('Post not found:', postId);
            return;
        }
        
        posts.splice(postIndex, 1);
        localStorage.setItem('userPosts', JSON.stringify(posts));
        renderPosts();
        showToast('Đã xóa bài viết thành công!');
    }
    
    // Show toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // Format timestamp to readable time
    function formatTimestamp(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (seconds < 60) return "Vừa xong";
        else if (minutes < 60) return `${minutes} phút trước`;
        else if (hours < 24) return `${hours} giờ trước`;
        else if (days < 7) return `${days} ngày trước`;
        else return new Date(timestamp).toLocaleDateString('vi-VN');
    }
    
    // Toggle dropdown visibility
    function toggleDropdown(button) {
        const dropdown = button.nextElementSibling;
        const isShown = dropdown.classList.contains('show');
        
        document.querySelectorAll('.post-dropdown.show').forEach(d => d.classList.remove('show'));
        
        if (!isShown) {
            dropdown.classList.add('show');
        }
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.post-actions')) {
            document.querySelectorAll('.post-dropdown.show').forEach(d => d.classList.remove('show'));
        }
    });
    
   // Render all posts to the DOM
function renderPosts() {
    if (!postsContainer) {
        console.error('Post container (.col-md-8) not found!');
        return;
    }

    const postCreateArea = document.querySelector('.post-create');
    const fragment = document.createDocumentFragment();

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'profile-card post';
        postElement.dataset.postId = post.id;

        postElement.innerHTML = `
            <div class="post-header">
                <img src="../img/avartar.jpg" class="post-avatar" alt="User">
                <div class="post-user-info">
                    <div class="post-user">${post.author}</div>
                    <div class="post-time">${formatTimestamp(post.timestamp)} - <span class="post-visibility">${post.visibility}</span></div>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content || ''}</p>
                ${post.image ? `<img src="${post.image}" alt="${post.isGif ? 'GIF' : 'Post Image'}" class="${post.isGif ? 'gif-image' : 'post-image'}">` : ''}
            </div>
            <div class="post-interactions">
                <div class="interaction-counts">
                    <span><i class="fas fa-thumbs-up"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments || 0}</span>
                </div>
                <div class="interaction-buttons">
                    <button class="interaction-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-thumbs-up"></i> Thích
                    </button>
                    <button class="interaction-btn"><i class="fas fa-comment"></i> Bình luận</button>
                    <button class="interaction-btn"><i class="fas fa-share"></i> Chia sẻ</button>
                </div>
            </div>
        `;

        fragment.appendChild(postElement);

        // Sự kiện cho nút thích
        const likeBtn = postElement.querySelector('.interaction-btn[data-post-id]');
        if (likeBtn) {
            likeBtn.addEventListener('click', function() {
                const postId = this.dataset.postId;
                toggleLike(postId);
            });
        }
    });

    // Xóa các bài đăng cũ và thêm fragment
    const existingPosts = postsContainer.querySelectorAll('.profile-card.post:not(#postCreate)');
    existingPosts.forEach(post => post.remove());
    if (postCreateArea && postCreateArea.parentNode === postsContainer) {
        postsContainer.insertBefore(fragment, postCreateArea.nextSibling);
    } else {
        postsContainer.appendChild(fragment);
    }
}

// Toggle like on a post
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.isLiked = !post.isLiked;
        post.likes = post.isLiked ? post.likes + 1 : Math.max(0, post.likes - 1);
        localStorage.setItem('userPosts', JSON.stringify(posts));
        renderPosts();
    }
}
    
    // Reset form after posting
    function resetPostForm() {
        if (postTextarea) postTextarea.value = '';
        selectedImage = null;
        selectedGif = null;
        if (imagePreviewContainer) imagePreviewContainer.style.display = 'none';
        if (imageInput) imageInput.value = '';
        if (visibilitySelect) visibilitySelect.selectedIndex = 0;
    }
});