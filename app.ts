// Select form elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeSection = document.getElementById("resume-section") as HTMLElement;

// Select fields to populate the resume
const resumeName = document.getElementById("resume-name") as HTMLElement;
const resumeEmail = document.getElementById("resume-email") as HTMLElement;
const resumePhone = document.getElementById("resume-phone") as HTMLElement;
const resumeEducation = document.getElementById("resume-education") as HTMLElement;
const resumeWorkExperience = document.getElementById("resume-work-experience") as HTMLElement;
const resumeSkills = document.getElementById("resume-skills") as HTMLElement;

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

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
  skills.split(",").forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    resumeSkills.appendChild(li);
  });

  // Show the resume section
  resumeSection.classList.remove("d-none");
});
