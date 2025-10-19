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
    
    This site was built with:
    ✨ Clean HTML5 structure
    🎨 Old-school CSS styling
    ⚡ Smooth JavaScript interactions
    
    Thanks for visiting! 💫
    `);
});
// Chatbot interaction
// Chatbot interaction
const chatSendBtn = document.getElementById('chat-send');
if (chatSendBtn) {
    chatSendBtn.addEventListener('click', async () => {
        const input = document.getElementById('chat-input');
        const msg = input.value.trim();
        if (!msg) return;

        const chatBox = document.getElementById('chat-messages');
        chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;
        input.value = '';

        // 顯示 loading 狀態
        chatBox.innerHTML += `<p><i>Bot is thinking...</i></p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        try {
            // 呼叫你的 Vercel 部署 API
            const response = await fetch('https://sabrina-chatbot-2xq4lpv2j-kevins-projects-1e8e63e0.vercel.app/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // 刪掉 loading
            chatBox.lastChild.remove();
            chatBox.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
        } catch (error) {
            console.error('Chat error:', error);
            chatBox.lastChild.remove();
            chatBox.innerHTML += `<p><b>Bot:</b> Sorry, something went wrong. 😢</p>`;
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    });
}
