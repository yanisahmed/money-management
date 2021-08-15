document.getElementById('btn-login').addEventListener('click', function (e) {
    const userEmail = document.getElementById("useremail").value;
    const userPassword = document.getElementById("userpass").value;

    if (userEmail == "yanis@gmail.com" && userPassword == "123") {
        window.location.href = "./banking.html";
    } else {
        const errorMsg = document.createElement("p");
        errorMsg.innerText = "Please try with the placeholder value";
        errorMsg.classList.add("text-red-500");
        errorMsg.classList.add("mt-2");
        this.parentNode.appendChild(errorMsg);
        console.log(this.parentNode);
    }
});