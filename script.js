function addBug() {

    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const status = document.getElementById("status").value;

    if (!title || !desc) {
        alert("Fill all fields");
        return;
    }

    let bugs = JSON.parse(localStorage.getItem("bugs")) || [];

    bugs.push({
        title: title,
        desc: desc,
        status: status
    });

    localStorage.setItem("bugs", JSON.stringify(bugs));

    loadBugs();

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}

function loadBugs() {

    const bugList = document.getElementById("bugList");

    let bugs = JSON.parse(localStorage.getItem("bugs")) || [];

    bugList.innerHTML = "";

    bugs.forEach((bug, index) => {

        bugList.innerHTML += `
            <div class="bug">
                <h3>${bug.title}</h3>
                <p>${bug.desc}</p>
                <p>Status: ${bug.status}</p>
                <button onclick="deleteBug(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteBug(index) {

    let bugs = JSON.parse(localStorage.getItem("bugs")) || [];

    bugs.splice(index, 1);

    localStorage.setItem("bugs", JSON.stringify(bugs));

    loadBugs();
}

loadBugs();
