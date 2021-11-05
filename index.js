document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity
            document.getElementById("title").textContent = "No Longer BoredBot"
            document.body.classList.add("fun")
            document.getElementById("get-activity").classList.add("fun-button")
        })
})