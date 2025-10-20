// Tab functionality for Sabrina's Personal Website
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Add a subtle animation effect
            const activeContent = document.getElementById(targetTab);
            activeContent.style.opacity = '0';
            activeContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                activeContent.style.opacity = '1';
                activeContent.style.transform = 'translateY(0)';
            }, 50);
        });
    });

    // Add hover effects to photo placeholders
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add a subtle typing effect to the main heading
    const mainHeading = document.querySelector('header h1');
    if (mainHeading) {
        const originalText = mainHeading.textContent;
        mainHeading.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                mainHeading.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add click effect to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add a welcome message in the console
    console.log(`
    🎉 Welcome to Sabrina's Personal Website! 🎉
    `);
});
// Floating Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatSendBtn = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat window
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', function() {
            chatWindow.classList.toggle('hidden');
            if (!chatWindow.classList.contains('hidden')) {
                chatInput.focus();
            }
        });
    }

    // Close chat window
    if (chatClose && chatWindow) {
        chatClose.addEventListener('click', function() {
            chatWindow.classList.add('hidden');
        });
    }

    // Send message functionality
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user-message');
        chatInput.value = '';

        // Count words in the message
        const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;
        
        // Generate meow response
        const meowResponse = 'meow '.repeat(wordCount).trim();
        
        // Add bot response with a slight delay
        setTimeout(() => {
            addMessage(meowResponse, 'bot-message');
        }, 500);
    }

    // Add message to chat
    function addMessage(text, className) {
        const messageDiv = document.createElement('p');
        messageDiv.className = className;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Send button click
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', sendMessage);
    }

    // Enter key press
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Add welcome message when chat opens
    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', function() {
            if (!chatWindow.classList.contains('hidden') && chatMessages.children.length === 0) {
                addMessage("Tell Sabrina something! 🩵", 'bot-message');
            }
        });
    }
});
