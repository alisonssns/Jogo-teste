const playerVida = document.querySelector(".pLife")
const municao = document.querySelector('.bullets')
const alies = document.querySelectorAll(".p1")
let itemChose = false;
let recarga = false;
let gasto;
let ataque;
let balas;
let dmg;

let player = {
    LP: document.querySelector(".pV"),
    shield: document.querySelector(".pE"),
    vidaMax: 100,
    vidaAtual: 100,
    escudoMax: 100,
    escudoAtual: 0,
    dano: 0,
    defesa: 5,
    balas: 6,
    chose: false,

    escudo(qnt) {
        if (this.escudoAtual < this.escudoMax) {
            this.escudoAtual += qnt;
            if (this.escudoAtual > this.escudoMax) {
                this.escudoAtual -= this.escudoAtual - this.escudoMax;
            }
            this.shield.style.width = `${(this.escudoAtual / this.escudoMax) * 100}%`
        }
    },

    curou(cura) {
        if (this.vidaAtual < this.vidaMax) {
            this.vidaAtual += cura;
            if (this.vidaAtual > this.vidaMax) {
                this.vidaAtual -= this.vidaAtual - this.vidaMax;
            }
            this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
        }
    },

    tomouDano(dmg) {
        if (this.escudoAtual > 0) {
            this.escudoAtual -= dmg;
            if (this.escudoAtual < 0) {
                this.vidaAtual += this.escudoAtual
                this.escudoAtual = 0
                if (this.vidaAtual <= 0) {
                    this.vidaAtual = this.vidaMax;
                    this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
                    // perdeu()
                    return;
                }
                this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
            }
            this.shield.style.width = `${(this.escudoAtual / this.escudoMax) * 100}%`
        } else {
            this.vidaAtual -= dmg;
            if (this.vidaAtual <= 0) {
                this.vidaAtual = this.vidaMax;
                this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
                // perdeu()
                return;
            }
            this.LP.style.width = `${(this.vidaAtual / this.vidaMax) * 100}%`
        }
    },

    idle() {
        alies[0].style.backgroundImage = "url(/raider/Raider_2/idle.png)"
        xMax = 1445;
        loopMax = 1;
        this.chose = false;
    },

}

for (let i = 0; i < player.balas; i++) {
    let bala = document.createElement('div')
    bala.className = "bullet"
    municao.appendChild(bala)
}

const playerItens = [
    it1 = {
        efeito: 'cura',
        intensidade: player.vidaMax/4,
        icon: "/icons/cure.png"
    },
    it2 = {
        efeito: 'dano',
        intensidade: 3,
        icon: "/icons/sword.png"
    },
    it3 = {
        efeito: 'escudo',
        intensidade: 20,
        icon: "/icons/shield.png"
    },
    it4 = {
        efeito: 'cura',
        intensidade: player.vidaMax/2,
        icon: "/icons/cure.png"
    }
]

const playerAtaques = [
    at1 = {
        dano: 5,
        municao: 2,
        animation: "/raider/Raider_2/Shot_2.png",
        loop: 2,
        ataque: true,
        recarga: false
    },
    at2 = {
        dano: 10,
        municao: 5,
        animation: "/raider/Raider_2/Shot_1.png",
        loop: 5,
        ataque: true,
        recarga: false
    },
    at3 = {
        dano: 5,
        municao: 0,
        animation: "/raider/Raider_2/Attack.png",
        loop: 1,
        ataque: true,
        recarga: false
    },
    at4 = {
        dano: 0,
        municao: 0,
        animation: "/raider/Raider_2/Recharge.png",
        loop: 4,
        ataque: false,
        recarga: true
    }
]


function dano(choice) {
    balas = document.querySelectorAll('.bullet')
    if (!player.chose && state.playerTurn && balas.length >= playerAtaques[choice].municao) {
        if (playerAtaques[choice].municao == 0) {
            gasto = false;
        } else {
            gasto = true;
        }
        x = 45;
        alies[0].style.backgroundPosition = `-${x}px`;
        alies[0].style.backgroundImage = `url(${playerAtaques[choice].animation})`
        xMax = 645;
        loopMax = playerAtaques[choice].loop;
        player.chose = true;
        dmg = playerAtaques[choice].dano + player.dano;
        ataque = playerAtaques[choice].ataque;
        recarga = playerAtaques[choice].recarga;
    } else {
        return;
    }
}

function item(choice) {
    if (!player.chose && state.playerTurn) {
        x = 45;
        itemChose = true
        itt.style.backgroundImage = `url(${playerItens[choice].icon})`
        alies[0].appendChild(itt)
        switch (playerItens[choice].efeito) {
            case 'dano':
                player.dano += playerItens[choice].intensidade
                break;
            case 'cura':
                player.curou(playerItens[choice].intensidade)
                break;
            case 'escudo':
                player.escudo(playerItens[choice].intensidade)
                break;
        }
        player.chose = true;
    } else { return; }
}