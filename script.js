// =========================================
// IIT Kasukabe Registration Portal
// Developed by Rushi Madge
// =========================================

console.log("🏛️ Welcome to IIT Kasukabe!");

window.addEventListener("load", () => {
    console.log("Website Loaded Successfully!");
});

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message
setTimeout(() => {
    alert("🎉 Welcome to IIT Kasukabe!\nIndia's Most Prestigious* Institute (*Definitely Real 😎)");
}, 1000);

const logo = document.getElementById("logo");
const popup = document.getElementById("secretLab");

let clicks = 0;

logo.addEventListener("click", () => {

    clicks++;

    if (clicks >= 7) {

        const code = prompt("🔒 Enter Secret Lab Code");

        if (code === "KASUKABE2026") {

            popup.classList.add("show");

        }

        else if (code === "CHOCOBI") {

            alert("🍫 Unlimited Chocobi Activated!\n\n+999 Energy\n+999 Happiness\nShinchan is proud of you 😂");

        }

        else if (code === "SHINCHAN") {

            alert("👦 Welcome Shinchan!\n\nKasukabe Elite Student Status Unlocked! 🌟");

        }

        else if (code !== null) {

            alert("❌ Wrong Secret Code!");

        }

        clicks = 0;

    }

});

function closeLab() {

    popup.classList.remove("show");

}


// =========================================
// IIT Kasukabe Registration Portal
// Developed by Rushi Madge
// =========================================

// =========================
// Hacker Detector (Fun Easter Egg)
// =========================

document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {

        e.preventDefault();

        alert("😎 Nice Try Hacker!\nDirector Rushi is watching you 👀");

    }

});document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {

        e.preventDefault();

        alert("📜 Source Code Locked!\nOnly IIT Kasukabe Professors Allowed 😂");

    }

});document.addEventListener("keydown", function (e) {

    if (e.key === "F12") {

        e.preventDefault();

        alert("🚫 Access Denied!\nNice Try Hacker 😂");

    }

});// ======================================
// FAKE HACKER DETECTION SYSTEM
// ======================================

function fakeHackScreen() {

    const overlay = document.createElement("div");

    overlay.id = "hackOverlay";

    overlay.innerHTML = `
        <div class="hack-box">
            <h1>⚠ SYSTEM BREACH DETECTED ⚠</h1>

            <p id="hackText">Scanning Hacker...</p>

            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const messages = [
        "Scanning Hacker...",
        "Locating Device...",
        "Collecting Evidence...",
        "Sending Complaint to Shinchan...",
        "Calling Principal Sir...",
        "😂 JUST KIDDING 😂"
    ];

    let i = 0;

    const text = document.getElementById("hackText");

    const interval = setInterval(() => {

        if (i < messages.length) {

            text.innerText = messages[i];
            i++;

        } else {

            clearInterval(interval);

            setTimeout(() => {

                overlay.remove();

                alert("😎 Welcome to IIT Kasukabe!\nNice Try Hacker 😂");

            }, 1000);

        }

    }, 800);

}

// Detect F12
document.addEventListener("keydown", function(e){

    if(e.key==="F12"){

        e.preventDefault();

        fakeHackScreen();

    }

});

// Detect Ctrl+Shift+I
document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.shiftKey &&
      (e.key==="I" || e.key==="i")){

        e.preventDefault();

        fakeHackScreen();

    }

});// =============================
// MATRIX RAIN EFFECT
// =============================

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

let matrixRunning = false;

function startMatrix() {

    if (matrixRunning) return;

    matrixRunning = true;

    canvas.style.display = "block";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars =
        "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const fontSize = 16;

    const columns = Math.floor(canvas.width / fontSize);

    const drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] = 1;

    }

    function draw() {

        if (!matrixRunning) return;

        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for(let i=0;i<drops.length;i++){

            const text =
            chars[Math.floor(Math.random()*chars.length)];

            ctx.fillText(
                text,
                i*fontSize,
                drops[i]*fontSize
            );

            if(
                drops[i]*fontSize>canvas.height &&
                Math.random()>0.975
            ){

                drops[i]=0;

            }

            drops[i]++;

        }

        requestAnimationFrame(draw);

    }

    draw();

}

function stopMatrix(){

    matrixRunning=false;

    canvas.style.display="none";

}

function hackerMode(){

    startMatrix();

    fakeHackScreen();

    setTimeout(()=>{

        stopMatrix();

    },6000);

}

// Detect F12
document.addEventListener("keydown",(e)=>{

if(e.key==="F12"){

e.preventDefault();

hackerMode();

}

});

// Detect Ctrl+Shift+I
document.addEventListener("keydown",(e)=>{

if(e.ctrlKey && e.shiftKey &&
(e.key==="I"||e.key==="i")){

e.preventDefault();

hackerMode();

}

});// ==========================
// REGISTRATION SYSTEM
// ==========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const student = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            rank: document.getElementById("rank").value,

            department: document.getElementById("department").value,

            dob: document.getElementById("dob").value

        };

        localStorage.setItem(
            "student",
            JSON.stringify(student)
        );

        alert("🎉 Registration Successful!\nWelcome to IIT Kasukabe!");

        window.location.href = "dashboard.html";

    });

}// ==========================
// SECRET LAB PASSWORD
// ==========================

const modal =
document.getElementById("secretCodeModal");

const unlockBtn =
document.getElementById("unlockBtn");

const closeBtn =
document.getElementById("closeSecret");

const message =
document.getElementById("secretMessage");

function openSecretCode(){

modal.style.display="flex";

}

if(closeBtn){

closeBtn.onclick=function(){

modal.style.display="none";

};

}

if(unlockBtn){

unlockBtn.onclick=function(){

const code=
document.getElementById("secretCode").value;

if(code==="KASUKABE2026"){

message.style.color="#00ff66";

message.innerHTML="✅ ACCESS GRANTED";

setTimeout(()=>{

openSecretCode();

},1200);

}

else{

message.style.color="red";

message.innerHTML="❌ WRONG CODE";

}

};

}// ==========================
// Animated Stats Counter
// ==========================

const counters = document.querySelectorAll(".card h2");

const targetValues = [
    "125K+",
    "420",
    "69",
    "100%"
];

counters.forEach((counter, index) => {
    counter.textContent = targetValues[index];
});