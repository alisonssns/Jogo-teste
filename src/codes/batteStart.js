let x = 45;
let xMax = 1445;
loop = 0;
loopMax = 1;
const eff = document.createElement("div")
eff.className = ("boom")
const itt = document.createElement('div')
itt.className = "item"
let scale = 1;

setInterval(() => {
    x += 200;
    if (x > xMax) {
        loop++;
        x = 45;

        if (player.chose) {
            if (ataque) {
                if (gasto) {
                    balas = document.querySelectorAll('.bullet')
                    balas[0].remove();
                    player.balas--;
                }
                enemies[0].style.filter = `opacity(0.5)`;
                enemies[0].appendChild(eff);
                enemy.tomouDano(dmg)
                setTimeout(() => {
                    enemies[0].style.filter = ``;
                }, 100);
                setTimeout(() => {
                    eff.remove();
                }, 500);
            } else if (recarga) {
                let bala = document.createElement('div')
                bala.className = "bullet"
                municao.appendChild(bala)
            }

            if (loop >= loopMax) {
                itt.remove();
                state.enemyTurn = true;
                state.playerTurn = false;
                ataque = false;
                itemChose = false;
                recarga = false;
                enemyAi(Math.floor(Math.random() * 4));
            }
        } else if (enemy.chose) {
            if (eAtaque) {
                alies[0].style.filter = `opacity(0.5)`;
                alies[0].appendChild(eff);
                player.tomouDano(Edmg)
                setTimeout(() => {
                    alies[0].style.filter = ``;
                }, 100);
                setTimeout(() => {
                    eff.remove();
                }, 500);
            } else {
                enemy.dano ++;
                itt.style.backgroundImage = `url(/icons/sword.png)`
                enemies[0].appendChild(itt)
            } if (loop >= loopMax) {
                eAtaque = false;
                state.enemyTurn = false;
                state.playerTurn = true;
            }
        }

        if (loop >= loopMax) {
            itt.remove();
            player.idle();
            enemy.idle();
            loop = 0;
        }
    }
    for (let i = 0; i < alies.length; i++) {
        alies[i].style.backgroundPosition = `-${x}px`;
    }
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].style.backgroundPosition = `-${x - 400}px`;
    }

}, 70);

enemies = document.querySelectorAll(".p2")
alies = document.querySelectorAll(".p1")
infos = document.querySelectorAll('.pinfos')


function animate() {
    requestAnimationFrame(animate)
    const enemyCod = {
        top: enemies[0].offsetTop,
        down: enemies[0].offsetTop + enemies[0].offsetHeight,
        left: enemies[0].offsetLeft,
        right: enemies[0].offsetLeft + enemies[0].offsetWidth,
    }
    const playerCod = {
        top: alies[0].offsetTop,
        down: alies[0].offsetTop + alies[0].offsetHeight,
        left: alies[0].offsetLeft,
        right: alies[0].offsetLeft + alies[0].offsetWidth,
    }
    infos[0].style.top = `${playerCod.top + 60}px`
    infos[0].style.left = `${playerCod.left + 10}px`
    infos[1].style.top = `${enemyCod.top + 60}px`
    infos[1].style.left = `${enemyCod.left + 45}px`

}

animate();