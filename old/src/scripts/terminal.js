const terminal = document.getElementById('terminal');
const input = document.getElementById('commandInput');

const helpMessage = `Available commands:
skills, experience, education, awards, projects
Type "help" to see this message again.`;

// Mock AWS responses
const responses = {
    skills: "JavaScript, Python, AWS, React, Node.js",
    experience: "Software Engineer at ACME Corp (2018–2025)",
    education: "B.S. in Computer Science, Neo City University",
    awards: "Employee of the Year 2022, Hackathon Winner 2023",
    projects: "Citizen Sleeper-inspired Resume, IoT Dashboard, Cyberpunk Game Mod"
};

input.addEventListener("keydown", async function(event) {
    if (event.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    // Show the command the user typed
    const cmdLine = document.createElement("div");
    cmdLine.classList.add("output");
    cmdLine.textContent = `> ${cmd}`;
    terminal.insertBefore(cmdLine, terminal.querySelector(".input-line"));

    // Response line
    const responseLine = document.createElement("div");
    responseLine.classList.add("output");

    if (cmd === "help") {
        responseLine.textContent = helpMessage;
    } else if (responses[cmd]) {
        responseLine.textContent = responses[cmd];
    } else {
        responseLine.textContent = `Unknown command: ${cmd}`;
    }

    terminal.insertBefore(responseLine, terminal.querySelector(".input-line"));

    // Reset input
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
    }
});