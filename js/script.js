const links = document.querySelectorAll('.section-nav a');
const content = document.getElementById('section-content');
const title = document.getElementById('section-title');

const sections = {
  about: {
    title: "About Me",
    html: `
    <div id="section-content">
        <div class="intro">
            <p>Masse tekst om meg</p>
        </div>
        <div class="tasks-container">
            <h3>What I do</h3>
            <div class="card-container">
                <img src="" alt="Web Design icon">
                <h4>Web Design</h4>
                <p>bla bla bla</p>
            </div>
            <div class="card-container">
                <img src="" alt="Web Development icon">
                <h4>Web Development</h4>
                <p>bla bla bla</p>
            </div>
        </div>
    </div>
    `
  },
  portfolio: {
    title: "Portfolio",
    html: `
      
    `
  },
  coverLetter: {
    title: "Cover Letter",
    html: `
      
    `
  },
  cv: {
    title: "CV",
    html: `
      
    `
  },
  contact: {
    title: "Contact",
    html: `
      
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
