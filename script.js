const form = document.getElementById('resumeForm');
const resumePreview = document.getElementById('resumePreview');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // data
    const name = document.getElementById('name').value;
    const aboutMe = document.getElementById('aboutMe').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;
    const website = document.getElementById('website').value;
    const workHistory  = document.getElementById('workHistory').value;
    const location = document.getElementById('location').value;
    // const species = document.getElementById('species').value;

    // make resume
    const resumeHTML = `
        <p>My name is ${name}</p>
        <p>${aboutMe}</p>
        <p>My E-mail address: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <p>Skills: ${skills}</p>
        <p>Education: ${education}</p>
        <p>Work History: ${workHistory}</p>
        <p>Website: ${website}</p>
        <p>Location: ${location}</p>
        `;

    resumePreview.innerHTML = resumeHTML;
});