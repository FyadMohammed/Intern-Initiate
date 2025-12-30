const themeBtn = document.getElementById("theme");
const body = document.body;

themeBtn.addEventListener("click",
    function () {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            themeBtn.textContent="Dark";
        }
        else{
            themeBtn.textContent="Light";
        }
    }
);

const sectionBtn = document.getElementById("sec-button");
const sectionSrc = document.getElementById("src");
const sectionBody = document.getElementById("first-section");

sectionBtn.addEventListener("click",function(){
    sectionBody.classList.toggle("sec-dark");

    if(sectionBody.classList.contains("sec-dark")){
        sectionSrc.textContent="Blue color";
    }else{
        sectionSrc.textContent = "White color";
    }

});


const screen = document.getElementById("screen");
const fragments = document.getElementById("fragments");
const btn = document.getElementById("breakBtn");

btn.addEventListener("click", () => {
  const rows = 5;
  const cols = 8;

  const rect = screen.getBoundingClientRect();
  fragments.style.width = rect.width + "px";
  fragments.style.height = rect.height + "px";
  fragments.style.top = rect.top + "px";
  fragments.style.left = rect.left + "px";

  const pieceW = rect.width / cols;
  const pieceH = rect.height / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = document.createElement("div");

      piece.className = "fragment";
      piece.style.width = pieceW + "px";
      piece.style.height = pieceH + "px";
      piece.style.left = c * pieceW + "px";
      piece.style.top = r * pieceH + "px";

      // random motion
      piece.style.setProperty("--x", 
        `${(Math.random() - 0.5) * 400}px`);
      piece.style.setProperty("--y", 
        `${(Math.random() - 0.5) * 400}px`);
      piece.style.setProperty("--r", 
        `${Math.random() * 360}deg`);

      fragments.appendChild(piece);
    }
  }

  screen.style.visibility = "hidden";
});


// Another screen breaking animation

const anotherBreakBtn = document.getElementById("anotherbreakBtn");
const anotherScreen = document.getElementById("anotherScreen");
const anotherFragments = document.getElementById("anotherFragments");

anotherBreakBtn.addEventListener("click",
    function () {
        const rows = 10;
        const cols = 10;

        const anotherRect = anotherScreen.getBoundingClientRect();

        anotherFragments.style.width = anotherRect.width + "px";
        anotherFragments.style.height = anotherRect.height + "px";
        anotherFragments.style.top = anotherRect.top + "px";
        anotherFragments.style.left = anotherRect.left + "px";

        const anotherPieceW = anotherRect.width/cols;
        const anotherPieceH = anotherRect.height/rows;

        const totalPieces = rows * cols;
        const centerX = anotherRect.width/2;
        const centerY = anotherRect.height/2;

        for(let r = 0;r < rows;r++){
            for(let c = 0;c < cols;c++){
                const piece = document.createElement("div");
                piece.className = "anotherFragments";

                piece.style.height = anotherPieceH + "px";
                piece.style.width = anotherPieceW + "px";
                piece.style.top = anotherPieceH * r + "px";
                piece.style.left = anotherPieceW * c + "px";

                const pieceIndex = r * cols + c;
                const angle = (pieceIndex / totalPieces) * 2 * Math.PI;
                const radius = 200 + Math.random() * 200;

                piece.style.setProperty("--x",`${radius * Math.cos(angle)}px`);
                piece.style.setProperty("--y", `${radius * Math.sin(angle)}px`);
                piece.style.setProperty("--r",`${Math.random() * 360}deg`);

                anotherFragments.appendChild(piece);
            }
        }

        anotherScreen.style.visibility = "hidden";
    }
);