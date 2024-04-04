function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
        document.body.innerHTML += object.id;
    })
    .catch(error => {
        document.body.innerHTML += error.message;
    });
};