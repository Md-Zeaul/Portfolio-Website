(function () {
    // Existing code for button control and theme toggle
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Typing animation code
    const roles = ['ML Engineer.', 'Data Analyst.', 'Web Developer.', 'Footballer.'];
    let roleIndex = 0;
    let typingIndex = 0;
    const typing = document.getElementById('typing');

    function typeText() {
        if (typingIndex < roles[roleIndex].length) {
            typing.textContent += roles[roleIndex].charAt(typingIndex);
            typingIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(deleteText, 2000); // Wait, then start deleting
        }
    }

    function deleteText() {
        if (typingIndex > 0) {
            typing.textContent = roles[roleIndex].substring(0, typingIndex - 1);
            typingIndex--;
            setTimeout(deleteText, 100);
        } else {
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
            setTimeout(typeText, 500); // Wait, then start typing next role
        }
    }

    // Start the typing effect
    setTimeout(typeText, 2000);

    
})();
