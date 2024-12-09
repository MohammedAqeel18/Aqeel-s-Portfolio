document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.navbar button');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupBox = document.getElementById('popup-box');
    const popupContent = document.getElementById('popup-content');
    const cancelButton = document.getElementById('cancel-button');

    // Define the content for each section
   const content = {
    "Education": '<div class="popup-header"><h1 class="one">Education 🕮 </h1></div><div class="content-box"><p>My educational journey began at Polonnaruwa Muslim National School, where I actively participated in various extracurricular activities, particularly in cricket and volleyball. These experiences enhanced my physical abilities and taught me the value of teamwork, discipline, and perseverance. I thoroughly enjoyed my school life, cherishing the camaraderie and the vibrant school environment. Reflecting on those days, I find myself missing the school and the unforgettable experiences I had there.</p> <img src="img/School.jpg"></div><div class="content-box"><p>I am currently an undergraduate at Uva Wellassa University of Sri Lanka, pursuing a Bachelor of Industrial Information Technology (BIIT). Recognized as the only entrepreneurial university in the country, Uva Wellassa University aims to produce graduates who can add value to industrial and business processes. The BIIT program focuses on enhancing knowledge in IT applications within industry, contributing to economic development. The university’s emphasis on entrepreneurship ensures that all degree programs equip students with the skills required by employers, preparing us to meet the demands of the modern workforce.</p><img src="img/uni.jpg"></div><div class="content-box"> <p> I studied at the British College of Applied Studies (BCAS), Kalmunai Campus, where I completed a four-month diploma course in Information Technology and English. This access course included foundational training in programming, MS Office, web designing, Photoshop, and English, covering both grammar and spoken skills. The comprehensive curriculum provided essential technical skills and language proficiency, preparing students for further academic pursuits and professional challenges in the field of information technology.</p><img src="img/bcas.png"></div>',
    "Projects": '<div class="popup-header"><h1 class="one">My Projects 👨‍💻 🌐 </h1></div><div class="popup-section"><h2 class="two">Online Quiz Website </h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two"> </h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Undergraduate Life 👨🏻‍🎓</h2><div class="content-box"><p></p></div></div>',
    "Skills": '<div class="popup-header"><h1 class="one">Skills 🧬 </h1></div><div class="popup-section"><h2 class="two">Secondary Education 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Advanced Studies 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Undergraduate Life 👨🏻‍🎓</h2><div class="content-box"><p></p></div></div>',
    "Contact Me": '<div class="popup-header"><h1 class="one">Contact Me 📧 </h1></div><div class="popup-section"><h2 class="two">Get in Touch Always  🤝</h2> <div class="popup-section"><h2 class="two">Social Media 🌐</h2><div class="content-box"><p>Follow me on <a href="https://linkedin.com" style="color: #d5958e;">LinkedIn</a>, <a href="https://x.com/home" style="color: #d5958e;">Twitter</a>, and <a href="https://github.com" style="color: #d5958e;">GitHub</a>.</p></div></div><div class="popup-section"><h2 class="two">Contact Form 💬</h2><div class="content-box"><form class="contact-form"><input type="text" placeholder="Your Name" required><input type="email" placeholder="Your Email" required><textarea placeholder="Your Message" required></textarea><button type="submit">Send Message</button></form></div></div>',
};

    // Function to show the popup
    function showPopup(content) {
        popupContent.innerHTML = content;
        popupOverlay.style.display = 'block';
        popupBox.style.display = 'block';
    }

    // Function to hide the popup
    function hidePopup() {
        popupOverlay.style.display = 'none';
        popupBox.style.display = 'none';
    }

    // Attach event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            if (content[buttonText] !== undefined) {
                showPopup(content[buttonText]);
            }
        });
    });

    // Attach event listener to the cancel button to hide popup when clicked
    cancelButton.addEventListener('click', hidePopup);
});
