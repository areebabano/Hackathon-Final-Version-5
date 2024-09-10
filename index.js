"use strict";
var _a, _b, _c;
// Initialize resumeData with default values
let resumeData = {
    name: "",
    email: "",
    contact: "",
    portfolio: "",
    linkedin: "",
    degree: "",
    institution: "",
    graduationYear: "",
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    generateUrl: "",
    skills: [],
};
// Function to save changes made to resume data
function saveChanges(fieldId, value) {
    console.log(`Field edited: ${fieldId}, New Value: ${value}`);
    // Check if the field is an array (skills in this case)
    if (Array.isArray(resumeData[fieldId])) {
        resumeData[fieldId].push(value); // Add new skill to the array
    }
    else {
        resumeData[fieldId] = value; // Update other fields with the new value
    }
    console.log("Updated resume data:", resumeData);
}
// Add an event listener for DOMContentLoaded to ensure elements are available
document.addEventListener("DOMContentLoaded", () => {
    // Capture all elements with contenteditable attribute set to true
    document.querySelectorAll("[contenteditable=true]").forEach((element) => {
        // Add an input event listener to each of these elements
        element.addEventListener("input", (event) => {
            const target = event.target;
            // Call saveChanges with the id of the element and its new innerText
            saveChanges(target.id, target.innerText);
        });
    });
});
function printResume() {
    window.print();
}
// Add event listener for "Download Resume" button
(_a = document.querySelector(".download-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    printResume();
});
// Add More Skills Logic
(_b = document.getElementById("add-skill")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    var _a;
    const firstSkillInput = document.querySelector("#skills-container input");
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
        alert("Please fill in the first skill before adding more.");
        return;
    }
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
    (_a = document.getElementById("skills-container")) === null || _a === void 0 ? void 0 : _a.appendChild(skillInput);
});
// Event Listener for "Generate Resume" button
(_c = document.getElementById("form")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", (e) => {
    var _a;
    e.preventDefault();
    if (!validateFormFields()) {
        return;
    }
    // Capture form data
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const portfolio = document.getElementById("portfolio").value;
    const linkedIn = document.getElementById("linkedin").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const year = document.getElementById("year").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company-name").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const generateUrl = document.getElementById("generatedUrl").value;
    // Display other dynamic content
    document.getElementById("resume-name").textContent = userName;
    document.getElementById("resume-email").textContent = email;
    document.getElementById("resume-contact").textContent = contact;
    document.getElementById("resume-portfolio").textContent = portfolio;
    document.getElementById("resume-linkedin").textContent = linkedIn;
    document.getElementById("resume-degree").textContent = degree;
    document.getElementById("resume-institution").textContent = institution;
    document.getElementById("resume-year").textContent = year;
    document.getElementById("resume-job-title").textContent = jobTitle;
    document.getElementById("resume-company-name").textContent = company;
    document.getElementById("resume-start-date").textContent = startDate;
    document.getElementById("resume-end-date").textContent = endDate;
    document.getElementById("generatedUrl").textContent = generateUrl;
    // Handle Profile Picture
    const profilePic = (_a = document.getElementById("profile-picture").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("resume-profile-pic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    // Collect and display skills
    const skillInputs = document.querySelectorAll("#skills-container input");
    const skills = [];
    skillInputs.forEach(input => {
        if (input.value.trim()) {
            skills.push(input.value);
        }
    });
    const displaySkills = document.getElementById("resume-skill-list");
    if (displaySkills) {
        displaySkills.innerHTML = "";
        skills.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            displaySkills.appendChild(skillItem);
        });
    }
});
// Form Validation
function validateFormFields() {
    let isValid = true;
    let errorMessage = "";
    //capture Input Fields
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const portfolio = document.getElementById("portfolio").value;
    const linkedIn = document.getElementById("linkedin").value;
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const year = document.getElementById("year").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company-name").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const generateUrl = document.getElementById("generatedUrl").value;
    //validate user
    if (!userName) {
        isValid = false;
        errorMessage += "Name is required.\n";
    }
    //validate user email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errorMessage += "Valid email is required.\n";
    }
    //validate user phone number
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(contact)) {
        isValid = false;
        errorMessage += "Valid phone number is required.\n";
    }
    //validate user degree
    if (!degree) {
        isValid = false;
        errorMessage += "Degree is required.\n";
    }
    //validate institution
    if (!institution) {
        isValid = false;
        errorMessage += "Institution is required.\n";
    }
    //validate date
    if (!year) {
        isValid = false;
        errorMessage += "Graduation year is required.\n";
    }
    //validate job title
    if (!jobTitle) {
        isValid = false;
        errorMessage += "Job Title is required.\n";
    }
    //validate company
    if (!company) {
        isValid = false;
        errorMessage += "Company is required.\n";
    }
    //validate start date
    if (!startDate) {
        isValid = false;
        errorMessage += "Start date is required.\n";
    }
    //validate end date
    if (!endDate) {
        isValid = false;
        errorMessage += "End date is required.\n";
    }
    //validate skills 
    const skillInputs = document.querySelectorAll("#skills-container input");
    if (skillInputs.length === 0 || !skillInputs[0].value.trim()) {
        isValid = false;
        errorMessage += "At least one skill is required.\n";
    }
    // error show alert
    if (errorMessage) {
        alert(errorMessage);
    }
    //otherwise generate form
    return isValid;
}
;
// Function to generate a resume URL and display it
function generateResumeUrl() {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const generatedUrl = document.getElementById('generatedUrl');
    if (form && nameInput && generatedUrl) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userName = nameInput.value.trim();
            if (userName) {
                const userUrl = `${window.location.origin}/resume/${encodeURIComponent(userName)}`;
                generatedUrl.innerHTML = `Your unique resume URL: <a href="${userUrl}" target="_blank">${userUrl}</a>`;
            }
        });
    }
}
// Function to handle URL parameters
function handleUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
        const nameDecoded = decodeURIComponent(name);
        const resumeUrl = document.getElementById('generatedUrl');
        if (resumeUrl) {
            resumeUrl.innerHTML = `<h2>${nameDecoded}'s Resume</h2>`;
        }
    }
}
// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    generateResumeUrl();
    handleUrlParameters();
});
//   function generateResumeUrl() {
//     const nameInput = document.getElementById('name') as HTMLInputElement;
//     const generatedUrl = document.getElementById('generatedUrl') as HTMLParagraphElement;
//     const userName = nameInput?.value.trim();
//     if (userName) {
//         const userUrl = `${window.location.origin}/resume.html?name=${encodeURIComponent(userName)}`;
//         generatedUrl.innerHTML = `Your unique resume URL: <a href="${userUrl}" target="_blank">${userUrl}</a>`;
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const params = new URLSearchParams(window.location.search);
//     const name = params.get('name');
//     if (name) {
//         const resumeContent = document.getElementById('resumeContent');
//         if (resumeContent) {
//             resumeContent.innerHTML = `<h2>Resume for ${decodeURIComponent(name)}</h2>`;
//             // You can add more content or fetch additional data based on the name.
//         }
//     }
// });
