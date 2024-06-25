const enemies = document.querySelectorAll(".p2")
const enemyVida = document.querySelector(".eLife")
let eAtaque;

let enemy = {
    LP: document.querySelector(".eV"),
    vidaMax: 100,
    vidaAtual: 100,
    dano: 10,
    defesa: 5,
    chose: false,
    tomouDano(dmg) {
        this.vidaAtual -= dmg;
        this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
    },
    idle() {
        enemies[0].style.backgroundImage = "url(/raider/Raider_3/idle.png)"
        xMax = 1445;
        loopMax = 1;
        this.chose = false;
    }
}

let Edmg;
let enemyAtaques = [
    at1 = {
        dano: 3,
        animation: "/raider/Raider_3/Attack_1.png",
        loop: 4,
        eAtaque: true,
    },
    at2 = {
        dano: 8,
        animation: "/raider/Raider_3/Attack_2.png",
        loop: 2,
        eAtaque: true,
    },
    at3 = {
        dano: 10,
        animation: "/raider/Raider_3/Attack_3.png",
        loop: 3,
        eAtaque: true,
    },
    at4 = {
        dano: 0,
        animation: "/raider/Raider_3/Idle_2.png",
        loop: 4,
        eAtaque: false,
    }
]

function enemyAi(choice) {
    setTimeout(() => {
        if (!enemy.chose && state.enemyTurn) {
            x = 45;
            enemies[0].style.backgroundPosition = `-${x}px`;
            enemies[0].style.backgroundImage = `url(${enemyAtaques[choice].animation})`
            xMax = 1045;
            loopMax = enemyAtaques[choice].loop;
            enemy.chose = true;
            Edmg = enemyAtaques[choice].dano + enemy.dano;
            eAtaque = enemyAtaques[choice].eAtaque;
        } else {
            return;
        }
    }, 1000);
}