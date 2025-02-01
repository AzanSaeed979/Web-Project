document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.getElementById("btn");
  if (buttons) {
    buttons.addEventListener("click", function (e) {
      e.preventDefault();

      let firstname = document.getElementById("first_name").value;
      let lastname = document.getElementById("last_name").value;
      let gmail = document.getElementById("email").value;

      let container = document.createElement("div");

      container.style.backgroundColor = "black";
      container.style.fontSize = "28px";
      container.style.color = "white";
      container.style.padding = "10px";
      container.style.marginTop = "10px";

      let names = document.createTextNode(`Name: ${firstname} ${lastname}`);
      let lineBreak = document.createElement("br"); // Line break for formatting
      let email = document.createTextNode(`Email: ${gmail}`);

      // Append the content to the
      container.appendChild(names);
      container.appendChild(lineBreak);
      container.appendChild(email);

      document.body.appendChild(container);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const employ = document.getElementById("emp");
  const employmentContainer = document.getElementById("employment-container");
  let employmentCount = 0; // Counter for employment sections
  const maxEmployment = 3; // Maximum number of employment sections

  employ.onclick = function () {
    if (employmentCount < maxEmployment) {
      employmentCount++; // Increment the counter

      // Create a new employment section
      const newEmployment = document.createElement("div");
      newEmployment.classList.add("employment-section");

      newEmployment.innerHTML = `
        <h4>Employment ${employmentCount}</h4>
        <label for="job_title_${employmentCount}">Job Title</label>
        <input type="text" id="job_title_${employmentCount}" /><br />

        <label for="employer_${employmentCount}">Employer</label>
        <input type="text" id="employer_${employmentCount}" /><br />

        <label for="start_date_${employmentCount}">Start Date</label>
        <input type="date" id="start_date_${employmentCount}" />
        <label for="end_date_${employmentCount}">End Date</label>
        <input type="date" id="end_date_${employmentCount}" /><br />

        <label for="city_${employmentCount}">City</label>
        <input type="text" id="city_${employmentCount}" /><br />

        <label for="description_${employmentCount}">Description</label>
        <textarea id="description_${employmentCount}" rows="5" cols="40"></textarea>
      `;

      employmentContainer.appendChild(newEmployment);
    } else {
      alert("You can only add up to 3 employment sections.");
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const edu = document.getElementById("edu");
  const eduContainer = document.getElementById("edu-container");
  let minCount = 0;
  const maxCount = 3;

  if (edu) {
    edu.onclick = function () {
      if (minCount < maxCount) {
        minCount++;

        const newEdu = document.createElement("div");
        newEdu.classList.add("edu-section");

        newEdu.innerHTML = `
          <h4>Employment ${minCount}</h4>
          <label for="job_title_${minCount}">Job Title</label>
          <input type="text" id="job_title_${minCount}" /><br />

          <label for="employer_${minCount}">Employer</label>
          <input type="text" id="employer_${minCount}" /><br />

          <label for="start_date_${minCount}">Start Date</label>
          <input type="date" id="start_date_${minCount}" />
          <label for="end_date_${minCount}">End Date</label>
          <input type="date" id="end_date_${minCount}" /><br />

          <label for="city_${minCount}">City</label>
          <input type="text" id="city_${minCount}" /><br />

          <label for="description_${minCount}">Description</label>
          <textarea id="description_${minCount}" rows="5" cols="40"></textarea>
        `;

        eduContainer.appendChild(newEdu);
      } else {
        alert("You can only add up to 3 employment sections.");
      }
    };
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkboxForm");
  const checkboxOutput = document.getElementById("checkboxOutput");

  form.addEventListener("change", function (event) {
    const checkbox = event.target;
    const skillValue = checkbox.value;

    if (checkbox.checked) {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill-item");
      skillDiv.setAttribute("data-skill", skillValue);
      skillDiv.innerHTML = `
        <h3>${skillValue}</h3>
        <p>Expert Level</p>
        <input type="text" placeholder="Enter your expertise level (e.g., Beginner, Intermediate, Expert)" />
      `;

      checkboxOutput.appendChild(skillDiv);
    } else {
      const skillDivToRemove = document.querySelector(
        `.skill-item[data-skill="${skillValue}"]`
      );
      if (skillDivToRemove) {
        checkboxOutput.removeChild(skillDivToRemove);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let minValue = 0;
  let maxValue = 3;
  document.getElementById("course").onclick = function () {
    const outputCourse = document.getElementById("outputCourse");

    if (minValue < maxValue) {
      minValue++;
      const innerDiv = document.createElement("div");
      innerDiv.innerHTML = `
                <h2>Course ${minValue}</h2>
            <label for="course_${minValue}">Course</label>
            <input type="text" name="course_${minValue}" />
            <br/>
            <label for="institution_${minValue}">Institution</label>
            <input type="text" name="institution_${minValue}"/>
            <br/>
            <label for="start_date_${minValue}">Start Date</label>
            <input type="date" name="start_date_${minValue}"/
            <br/>
              <label for="end_date_${minValue}">End Date</label>
              <input type="date" name="end_date_${minValue}"/>
              <br/><br />
              `;
      outputCourse.appendChild(innerDiv);
    } else {
      alert("You can add only three courses");
    }
  };
});




function personalDetailsPage() {
  window.location.href = "/personaldetails.html";
}
