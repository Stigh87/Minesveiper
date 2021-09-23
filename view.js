//view
show();
function show() {
let appDiv = document.getElementById('app');
let html = '';







for (let i = 0; i < width*width; i++) {
const rute = document.createElement('div');
rute.setAttribute('id', i);
rute.classList.add();
app.appendChild(rute);
board.push(rute);
html += `<div onclick="trykk(this, ${i})" class="tiles, ${shuffledArray[i]}"></div>`;
}

// legg inn ID "manuelt" med "rute${[i]}" ??



        // html += `<hr>
        // <button onclick="flag()">Flag</button> <br>
        // <button onclick="newGame()">NEW GAME</button>`
    appDiv.innerHTML = html;
}

