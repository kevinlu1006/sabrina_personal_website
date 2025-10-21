// Tab functionality for Sabrina's Personal Website
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('theme-dark');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('theme-dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // Terminal hero typing effect
    const typedTarget = document.getElementById('terminal-typed');
    const textToType = 'echo "Welcome to Sabrina\'s Corner — built with love and blue vibes."';
    if (typedTarget) {
        let idx = 0;
        const type = () => {
            if (idx < textToType.length) {
                typedTarget.textContent += textToType.charAt(idx);
                idx++;
                setTimeout(type, 40);
            }
        };
        type();
    }
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
    
    // Home page subscription elements
    const homeSubscriptionPrompt = document.getElementById('home-subscription-prompt');
    const homeEmailForm = document.getElementById('home-email-form');
    const noWorriesMessage = document.getElementById('no-worries-message');
    const homeSubscribeYes = document.getElementById('home-subscribe-yes');
    const homeSubscribeNo = document.getElementById('home-subscribe-no');
    const homeEmailInput = document.getElementById('home-email-input');
    const homeEmailSubmit = document.getElementById('home-email-submit');
    const homeEmailCancel = document.getElementById('home-email-cancel');
    
    // Backend API URL - using a public service for demo
    // For production, deploy your backend to Railway, Heroku, or Render
    const API_BASE = 'https://sabrina-backend-demo.railway.app/api';

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
        
        // Store message in backend
        storeChatMessage(message);
        
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
    
    // Store chat message in backend
    async function storeChatMessage(message) {
        try {
            await fetch(`${API_BASE}/chat-message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: message,
                    timestamp: new Date().toISOString()
                })
            });
        } catch (error) {
            console.log('Could not store message (backend not running):', error);
        }
    }
    
    // Store email subscription
    async function storeEmailSubscription(email) {
        try {
            const response = await fetch(`${API_BASE}/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.log('Could not store email (backend not running):', error);
            return { success: false, message: 'Backend not available' };
        }
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
    
    // Home page subscription flow handlers
    if (homeSubscribeYes) {
        homeSubscribeYes.addEventListener('click', function() {
            homeSubscriptionPrompt.classList.add('hidden');
            homeEmailForm.classList.remove('hidden');
            homeEmailInput.focus();
        });
    }
    
    if (homeSubscribeNo) {
        homeSubscribeNo.addEventListener('click', function() {
            homeSubscriptionPrompt.classList.add('hidden');
            noWorriesMessage.classList.remove('hidden');
            // Clear the subscription choice so it shows again on refresh
            localStorage.removeItem('sabrina-subscription-choice');
        });
    }
    
    if (homeEmailSubmit) {
        homeEmailSubmit.addEventListener('click', async function() {
            const email = homeEmailInput.value.trim();
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            const result = await storeEmailSubscription(email);
            if (result.success) {
                alert(`✅ ${result.message}`);
                homeEmailForm.classList.add('hidden');
                // Mark as subscribed so it doesn't show again
                localStorage.setItem('sabrina-subscription-choice', 'subscribed');
            } else {
                alert(`❌ ${result.message}`);
            }
        });
    }
    
    if (homeEmailCancel) {
        homeEmailCancel.addEventListener('click', function() {
            homeEmailForm.classList.add('hidden');
            noWorriesMessage.classList.remove('hidden');
            // Clear the subscription choice so it shows again on refresh
            localStorage.removeItem('sabrina-subscription-choice');
        });
    }
    
    // Enter key in home email input
    if (homeEmailInput) {
        homeEmailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                homeEmailSubmit.click();
            }
        });
    }
    
    // Check subscription status on page load
    function checkSubscriptionStatus() {
        const subscriptionChoice = localStorage.getItem('sabrina-subscription-choice');
        if (subscriptionChoice === 'subscribed') {
            // User already subscribed, hide all prompts
            homeSubscriptionPrompt.classList.add('hidden');
            homeEmailForm.classList.add('hidden');
            noWorriesMessage.classList.add('hidden');
        } else if (subscriptionChoice === 'declined') {
            // User declined, show no worries message
            homeSubscriptionPrompt.classList.add('hidden');
            homeEmailForm.classList.add('hidden');
            noWorriesMessage.classList.remove('hidden');
        }
        // If no choice made, show the subscription prompt (default state)
    }
    
    // Initialize subscription status
    checkSubscriptionStatus();
});
