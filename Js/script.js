document.addEventListener('DOMContentLoaded', () => {

    // Theme (Dark/Light Mode) Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save the current theme to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

      // --- Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon between bars and close (X)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    // Interactive Quiz Logic
    const quizQuestions = document.querySelectorAll('.quiz-question');

    quizQuestions.forEach(question => {
        const options = question.querySelectorAll('.option');
        const feedbackEl = question.querySelector('.feedback');

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Disable all options for this question once one is clicked
                options.forEach(btn => btn.disabled = true);

                const isCorrect = option.dataset.correct === 'true';

                if (isCorrect) {
                    option.classList.add('correct');
                    feedbackEl.textContent = 'إجابة صحيحة! (Correct!)';
                    feedbackEl.style.color = 'var(--success-color)';
                } else {
                    option.classList.add('incorrect');
                    feedbackEl.textContent = 'حاول مرة أخرى. (Incorrect. Try again.)';
                    feedbackEl.style.color = 'var(--danger-color)';

                    // Highlight the correct answer
                    const correctOption = question.querySelector('[data-correct="true"]');
                    correctOption.classList.add('correct');
                }
            });
        });
    });

});