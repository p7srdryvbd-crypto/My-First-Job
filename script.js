const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

const jobSearch = document.getElementById('jobSearch');
const jobType = document.getElementById('jobType');
const jobCards = [...document.querySelectorAll('.job-card')];
const emptyState = document.getElementById('emptyState');

function filterJobs() {
    const search = jobSearch.value.trim().toLowerCase();
    const type = jobType.value;
    let visibleJobs = 0;

    jobCards.forEach(card => {
        const title = card.dataset.title.toLowerCase();
        const cardType = card.dataset.type;

        const matchesSearch = title.includes(search);
        const matchesType = type === 'all' || cardType === type;

        if (matchesSearch && matchesType) {
            card.style.display = '';
            visibleJobs++;
        } else {
            card.style.display = 'none';
        }
    });

    emptyState.style.display = visibleJobs === 0 ? 'block' : 'none';
}

jobSearch.addEventListener('input', filterJobs);
jobType.addEventListener('change', filterJobs);

document.querySelectorAll('.apply-link').forEach(link => {
    link.addEventListener('click', () => {
        const selectedJob = link.dataset.job;
        document.getElementById('position').value = selectedJob;
    });
});

const applicationForm = document.getElementById('applicationForm');
const formMessage = document.getElementById('formMessage');

applicationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('fullName').value.trim();

    formMessage.textContent =
        `Application submitted successfully${name ? `, ${name}` : ''}! This is a simulated application.`;

    applicationForm.reset();
});
