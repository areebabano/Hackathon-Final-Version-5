// Define the ResumeData interface to represent the structure of resume data
  interface ResumeData {
    name: string;
    email: string;
    contact: string;
    portfolio: string;
    linkedin: string;
    degree: string;
    institution: string;
    graduationYear: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    generateUrl: string;
    skills: string[];
  }
  
  // Initialize resumeData with default values
  let resumeData: ResumeData = {
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
  function saveChanges(fieldId: keyof ResumeData, value: string) {
    console.log(`Field edited: ${fieldId}, New Value: ${value}`);
  
    // Check if the field is an array (skills in this case)
    if (Array.isArray(resumeData[fieldId])) {
      resumeData[fieldId].push(value); // Add new skill to the array
    } else {
      resumeData[fieldId] = value as any; // Update other fields with the new value
    }
  
    console.log("Updated resume data:", resumeData);
  }
  
  // Add an event listener for DOMContentLoaded to ensure elements are available
  document.addEventListener("DOMContentLoaded", () => {
    // Capture all elements with contenteditable attribute set to true
    document.querySelectorAll("[contenteditable=true]").forEach((element) => {
      // Add an input event listener to each of these elements
      element.addEventListener("input", (event) => {
        const target = event.target as HTMLElement;
        // Call saveChanges with the id of the element and its new innerText
        saveChanges(target.id as keyof ResumeData, target.innerText);
      });
    });
  });
  
  
  function printResume(){
    window.print()
  }
  // Add event listener for "Download Resume" button
  document.querySelector(".download-button")?.addEventListener("click", () => {
    printResume();
  });

      // Add More Skills Logic
  document.getElementById("add-skill")?.addEventListener("click", () => {
    const firstSkillInput = document.querySelector("#skills-container input") as HTMLInputElement;
  
    if (!firstSkillInput || !firstSkillInput.value.trim()) {
      alert("Please fill in the first skill before adding more.");
      return;
    }
  
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Skill";
    skillInput.required = true;
  
    document.getElementById("skills-container")?.appendChild(skillInput);
  });
  
  // Event Listener for "Generate Resume" button
  document.getElementById("form")?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
  
    if (!validateFormFields()) {
      return;
    }
  
    // Capture form data
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;

    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;

    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company-name") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
    const generateUrl = (document.getElementById("generatedUrl") as HTMLInputElement).value;
  
    // Display other dynamic content
    (document.getElementById("resume-name") as HTMLElement).textContent = userName;
    (document.getElementById("resume-email") as HTMLElement).textContent = email;
    (document.getElementById("resume-contact") as HTMLElement).textContent = contact;
    (document.getElementById("resume-portfolio") as HTMLElement).textContent = portfolio;
    (document.getElementById("resume-linkedin") as HTMLElement).textContent = linkedIn;

    (document.getElementById("resume-degree") as HTMLElement).textContent = degree;
    (document.getElementById("resume-institution") as HTMLElement).textContent = institution;
    (document.getElementById("resume-year") as HTMLElement).textContent = year;

    (document.getElementById("resume-job-title") as HTMLElement).textContent = jobTitle;
    (document.getElementById("resume-company-name") as HTMLElement).textContent = company;
    (document.getElementById("resume-start-date") as HTMLElement).textContent = startDate;
    (document.getElementById("resume-end-date") as HTMLElement).textContent = endDate;
    (document.getElementById("generatedUrl") as HTMLElement).textContent = generateUrl;
  
    // Handle Profile Picture
    const profilePic = (document.getElementById("profile-picture") as HTMLInputElement).files?.[0];
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (e) {
        (document.getElementById("resume-profile-pic") as HTMLImageElement).src = e.target?.result as string;
      };
      reader.readAsDataURL(profilePic);
    }
  
    // Collect and display skills
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
    const skills: string[] = [];
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
  function validateFormFields(): boolean {
    let isValid = true;
    let errorMessage = "";
  
  
    //capture Input Fields
    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const portfolio = (document.getElementById("portfolio") as HTMLInputElement).value;
    const linkedIn = (document.getElementById("linkedin") as HTMLInputElement).value;

    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;

    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const company = (document.getElementById("company-name") as HTMLInputElement).value;
    const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
    const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
    const generateUrl = (document.getElementById("generatedUrl") as HTMLInputElement).value;
  
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
    const skillInputs = document.querySelectorAll("#skills-container input") as NodeListOf<HTMLInputElement>;
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
  };

// Function to generate a resume URL and display it
function generateResumeUrl(): void {
  const form = document.getElementById('form') as HTMLFormElement | null;
  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const generatedUrl = document.getElementById('generatedUrl') as HTMLParagraphElement | null;

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
function handleUrlParameters(): void {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');

  if (name) {
      const nameDecoded = decodeURIComponent(name);
      const resumeUrl = document.getElementById('generatedUrl') as HTMLParagraphElement | null;
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



