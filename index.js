// Add your code here
function submitForm(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                userName,
                userEmail
            }),
        })
        .then(response => response.json())
        .then(user => console.log(user["userName"]))
        .catch(error => console.log(error.message));
}

submitForm("George", "gokumu12@gmail.com");