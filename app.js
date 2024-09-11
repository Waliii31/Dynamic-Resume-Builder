// Select form elements
var form = document.getElementById("resume-form");
var resumeSection = document.getElementById("resume-section");
// Select fields to populate the resume
var resumeName = document.getElementById("resume-name");
var resumeEmail = document.getElementById("resume-email");
var resumePhone = document.getElementById("resume-phone");
var resumeEducation = document.getElementById("resume-education");
var resumeWorkExperience = document.getElementById("resume-work-experience");
var resumeSkills = document.getElementById("resume-skills");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value;
    // Validate form inputs
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Populate resume
    resumeName.textContent = name;
    resumeEmail.textContent = email;
    resumePhone.textContent = phone;
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;
    // Clear skills list and add new skills
    resumeSkills.innerHTML = "";
    skills.split(",").forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        resumeSkills.appendChild(li);
    });
    // Show the resume section
    resumeSection.classList.remove("hidden");
});
