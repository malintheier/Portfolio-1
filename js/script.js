const links = document.querySelectorAll('.section-nav a');
const content = document.getElementById('section-content');
const title = document.getElementById('section-title');

const sections = {
  about: {
    title: "About Me",
    html: `
    <div id="section-content">
      <div class="intro">
          <p>I work in a building supply store and study frontend development part-time online. Based in Norway, I’m building a career shift toward digital design and development, combining practical experience with a growing set of creative and technical skills. I enjoy traveling, staying active, and working on projects that blend structure with visual clarity. My focus is on creating responsive, user-friendly interfaces with clean code and thoughtful design.</p>
      </div>
      <div class="tasks-container">
          <h3>What I do</h3>
          <div class="card-grid">
          <div class="card-container">
              <img src="img/Pen.svg" alt="Web Design icon">
              <div class="card-text">
              <h4>Web Design</h4>
              <p>I create clean, responsive layouts with a focus on usability, visual clarity, and accessibility across devices.</p>
              </div>
          </div>
          <div class="card-container">
              <img src="img/desktop.svg" alt="Web Development icon">
              <div class="card-text">
              <h4>Web Development</h4>
              <p>I build functional, user-friendly websites using HTML, CSS, and JavaScript.</p>
              </div>
          </div>
          </div>
      </div>
    </div>
    `
  },
  portfolio: {
    title: "Portfolio",
    html: `
    <div id="portfolio-section">
      <div class="portfolio-grid">
        <div class="portfolio-card">
          <a href="https://norofffeu.github.io/html-css-course-assignment-malintheier/" target="_blank">
            <img src="img/rainy-days-teaser.jpg" alt="Rainy Days project thumbnail">
          </a>
          <h2>Rainy Days</h2>
          <p class="portfolio-description">A simple e-commerce site for outdoor jackets and gear.</p>
          <div class="portfolio-links">
            <a href="https://github.com/NoroffFEU/html-css-course-assignment-malintheier" target="_blank">GitHub Repo</a>
          </div>
        </div>
        <div class="portfolio-card">
          <a href="https://malintheier.github.io/semester-project-malintheier/" target="_blank">
            <img src="img/sciencity-teaser.jpg" alt="ScienCity project thumbnail">
          </a>
          <h2>ScienCity</h2>
          <p class="portfolio-description">A multi-page museum website with interactive content.</p>
          <div class="portfolio-links">
            <a href="https://github.com/malintheier/semester-project-malintheier" target="_blank">GitHub Repo</a>
          </div>
        </div>
        <div class="portfolio-card">
          <a href="https://malintheier-culinaire.netlify.app/" target="_blank">
            <img src="img/culinaire-teaser.jpg" alt="Culinaire project thumbnail">
          </a>
          <h2>Culinaire</h2>
          <p class="portfolio-description">A blog platform for food lovers and recipe creators.</p>
          <div class="portfolio-links">
            <a href="https://github.com/malintheier/FED1-PE1-malintheier" target="_blank">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div> 
    `
  },
  coverLetter: {
    title: "Cover Letter",
    html: `
    <div id="cover-letter-section">
      <div class="cover-letter">
        <p><strong>Malin Heier</strong><br>
        Rakkestad, Østfold, Norge<br>
        <a href="mailto:malintheier@gmail.com">malintheier@gmail.com</a> | +47 940 59 733</p>
        <p>[Hiring Manager]<br>
        [Company Name]<br>
        [Company Address]</p>
        <p>Dear Hiring Manager,</p>
        <p>I am writing to express my interest in the front-end developer position at [Company Name]. As a dedicated student currently enrolled in a part-time online program in front-end development, I am excited about the opportunity to contribute my technical skills, design sensibility, and passion for user-centered digital experiences to your team.</p>
        <p>Throughout my studies, I have built a strong foundation in HTML, CSS, and JavaScript, with a particular focus on responsive design and clean code. I’ve also worked extensively with tools such as Figma, GitHub, and VS Code, and I take pride in creating clean, accessible interfaces that balance functionality with visual clarity. My recent portfolio project showcases features I have implemented to enhance usability and engagement across devices.</p>
        <p>What draws me to [Company Name] is your commitment to [something specific about the company]. Your mission aligns closely with my own values of clarity, authenticity, and continuous improvement. I’m particularly inspired by [product/initiative/value] and would be thrilled to contribute to projects that make a meaningful impact.</p>
        <p>I would welcome the opportunity to discuss how my skills and enthusiasm can support your team’s goals. Thank you for considering my application. I am available for an interview at your convenience and look forward to hearing from you.</p>
        <p>Kind regards,<br>
        <strong>Malin Heier</strong></p>
      </div>
    </div>
    `
  },
  cv: {
    title: "CV",
    html: `
    <div id="cv-section">
      <h2>Education</h2>
      <div class="cv-entry">
        <h3>Frontend Development (Part-Time)</h3>
        <p class="cv-meta">October 2023 – October 2027 (Ongoing) | Noroff</p>
        <ul>
          <li>HTML, CSS, JavaScript, and modern frameworks</li>
          <li>User-centered design and responsive development</li>
          <li>Project work and version control using Git</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Media and Communication</h3>
        <p class="cv-meta">2018–2021 | Mysen Upper Secondary School</p>
        <ul>
          <li>Adobe Creative Cloud: Photoshop, Premiere Pro, InDesign</li>
          <li>Visual communication and media production</li>
          <li>Experience with digital presentation tools and content creation</li>
        </ul>
      </div>
      <h2>Skills</h2>
      <ul class="cv-skills">
        <li>Microsoft 365 (Word, Excel, PowerPoint, Outlook)</li>
        <li>Adobe Creative Cloud (Photoshop, Premiere Pro, InDesign)</li>
        <li>Web development: HTML, CSS, JavaScript</li>
        <li>Customer service and communication</li>
        <li>Retail operations, team leadership, and staff management</li>
      </ul>
      <h2>Work Experience</h2>
      <div class="cv-entry">
        <h3>Retail Assistant</h3>
        <p class="cv-meta">Optimera AS – Sarpsborg | July 2024 – Present</p>
        <ul>
          <li>Responsible for customer service, sales, and restocking</li>
          <li>Contributes to a tidy and efficient store environment</li>
          <li>Handles logistics and goods reception</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Store Manager</h3>
        <p class="cv-meta">Monter Optimera AS – Rakkestad | March 2022 – July 2024</p>
        <ul>
          <li>Managed daily store operations and staff</li>
          <li>Trained employees and supported team development</li>
          <li>Implemented sales strategies and campaigns</li>
          <li>Focused on customer service and operational efficiency</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Retail Assistant – Part-Time</h3>
        <p class="cv-meta">Rema 1000 – Rakkestad | March 2021 – June 2021</p>
        <ul>
          <li>Managed checkout, restocking, and store maintenance</li>
          <li>Delivered customer service with focus on efficiency and satisfaction</li>
          <li>Assisted with goods reception and delivery control</li>
          <li>Learned to handle busy periods with calm and structure</li>
        </ul>
      </div>
      <div class="cv-entry">
        <h3>Retail Assistant – Part-Time</h3>
        <p class="cv-meta">Monter Optimera AS – Rakkestad | March 2018 – March 2022</p>
        <ul>
          <li>Responsible for customer service, sales, and restocking</li>
          <li>Contributed to a clean and well-organized store environment</li>
        </ul>
      </div>
      <h2>Additional</h2>
      <ul class="cv-additional">
        <li>Experience with version control (Git/GitHub)</li>
        <li>Strong interest in technology, design, and user-friendly solutions</li>
        <li>Comfortable working independently and taking responsibility</li>
        <li>Quick to learn and adaptable to new systems and tools</li>
      </ul>
    </div>
    `
  },
  contact: {
    title: "Contact",
    html: `
    <div id="contact-section">
      <div class="contact-container">
        <div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13424.949981970629!2d11.329999388545673!3d59.423088192865386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4643f6eaa84fcdad%3A0x66193308bdad748e!2s1890%20Rakkestad!5e0!3m2!1sno!2sno!4v1760186109851!5m2!1sno!2sno"
            width="100%"
            height="300"
            style="border:0; filter: invert(100%)"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <form class="contact-form" action="#" method="post" autocomplete="on">
            <label for="name">Full name</label>
            <input type="text" id="name" name="name" required autocomplete="name">
            <label for="email">Email address</label>
            <input type="email" id="email" name="email" required autocomplete="email">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="5" required autocomplete="off"></textarea>
            <button type="submit">Send Message</button>
          </form>
      </div>
    </div>
    `
  }
};

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    if (link.classList.contains('active')) return;

    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const key = link.dataset.section;

    content.classList.add('fade-out');

    setTimeout(() => {
      title.textContent = sections[key].title;
      content.innerHTML = sections[key].html;

      content.classList.remove('fade-out');
      content.classList.add('fade-in');

      setTimeout(() => {
        content.classList.remove('fade-in');
      }, 250);
    }, 150);
  });
});
