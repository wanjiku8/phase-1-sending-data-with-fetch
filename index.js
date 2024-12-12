// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    // Fetch and handle response
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Append the new ID to the DOM
        const idElement = document.createElement("p");
        idElement.textContent = `New ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        // Handle errors and display them on the DOM
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  