document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.navbar button');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupBox = document.getElementById('popup-box');
    const popupContent = document.getElementById('popup-content');
    const cancelButton = document.getElementById('cancel-button');

    // Define the content for each section
   const content = {
    "Education": '<div class="popup-header"><h1 class="one">Education 🕮 </h1></div><div class="content-box"><p>My educational journey began at Polonnaruwa Muslim National School, where I attended until Grade 11 and successfully completed my Ordinary Level examination. During my time at school, I actively participated in various extracurricular activities, particularly in sports such as cricket and volleyball. These experiences not only enhanced my physical abilities but also taught me the value of teamwork, discipline, and perseverance. I thoroughly enjoyed my school life, cherishing the camaraderie and the vibrant school environment. Reflecting on those days, I find myself missing the school and the unforgettable experiences I had there.</p></div></div></p></div></div><div class="popup-section"><div class="content-box"><p>Currently, I am an undergraduate at Uva Wellassa University of Sri Lanka, which is recognized as the only entrepreneurial university in the country. I am pursuing a Bachelor of Industrial Information Technology (BIIT), a degree program introduced by Uva Wellassa University with the objective of producing graduates capable of adding value to industrial and business processes. The program emphasizes the enhancement of knowledge in information technology applications within industry, ultimately contributing to greater economic development. Uva Wellassa University’s unique focus on entrepreneurship ensures that all degree programs deliver the knowledge and skills required by employers in industry and commerce, preparing students like myself to meet the demands of the modern workforce.</p></div> <div class="content-box"> <p> BCAS  </p> </div></div>',
    "Projects": '<div class="popup-header"><h1 class="one">Projects 👨‍💻 🌐 </h1></div><div class="popup-section"><h2 class="two">Secondary Education 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Advanced Studies 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Undergraduate Life 👨🏻‍🎓</h2><div class="content-box"><p></p></div></div>',
    "Skills": '<div class="popup-header"><h1 class="one">Skills 🧬 </h1></div><div class="popup-section"><h2 class="two">Secondary Education 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Advanced Studies 🏫</h2><div class="content-box"><p></p></div></div><div class="popup-section"><h2 class="two">Undergraduate Life 👨🏻‍🎓</h2><div class="content-box"><p></p></div></div>',
    "Passion": '<div class="popup-header"><h1 class="one">Passion👊</h1></div><div class="popup-section"><h2 class="two">Cricket 🏏</h2><div class="content-box"><p>Cricket has been a lifelong passion for me, starting from my childhood days. It\'s more than just a sport; it\'s an emotion deeply ingrained in my life. I avidly follow the Indian Men\'s cricket team, and at the heart of my admiration is Virat Kohli. His unwavering determination and resilience make him not just a favorite player but also a role model for me. Kohli\'s never-give-up attitude both on and off the field continues to inspire me profoundly. Cricket has taught me invaluable lessons in teamwork, discipline, and perseverance, which I apply in various aspects of my life.</p></div></div><div class="popup-section"><h2 class="two">Passionate Cook👨‍🍳</h2><div class="content-box"><p>My passion for cooking is a cornerstone of my personal well-being and creativity. I derive immense satisfaction from crafting non-vegetarian dishes, finding that the art of cooking serves as a therapeutic escape from everyday challenges. This pursuit not only fuels my enthusiasm for diverse culinary experiences but also enriches my life with a sense of accomplishment and joy.</p></div></div><div class="popup-section"><h2 class="two">YouTube 🎥</h2><div class="content-box"><p>In my leisure time, I am passionate about engaging with YouTube content. I avidly follow travel vlogs, cooking demonstrations, technology reviews, movie watching and analyses, as well as investigative and decoding thriller videos. Furthermore, YouTube is an invaluable resource for my programming studies, providing me with a wealth of tutorials and educational materials to enhance my skills.</p></div></div><div class="popup-section"><h2 class="two">Gym 🏋️‍♀️</h2><div class="content-box"><p>I am dedicated to maintaining a healthy lifestyle through natural home workouts. I consistently engage in strength training, cardiovascular exercises, and overall physical wellness routines at home. This commitment to fitness not only enhances my physical health but also contributes to my mental well-being, discipline, and perseverance.</p></div></div>',
    "Contact Me": '<div class="popup-header"><h1 class="one">Contact Me 📧 </h1></div><div class="popup-section"><h2 class="two">Get in Touch Always  🤝</h2> <div class="popup-section"><h2 class="two">Social Media 🌐</h2><div class="content-box"><p>Follow me on <a href="https://linkedin.com" style="color: #d5958e;">LinkedIn</a>, <a href="https://twitter.com" style="color: #d5958e;">Twitter</a>, and <a href="https://github.com" style="color: #d5958e;">GitHub</a>.</p></div></div><div class="popup-section"><h2 class="two">Contact Form 💬</h2><div class="content-box"><form class="contact-form"><input type="text" placeholder="Your Name" required><input type="email" placeholder="Your Email" required><textarea placeholder="Your Message" required></textarea><button type="submit">Send Message</button></form></div></div>',
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
