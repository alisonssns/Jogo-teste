let imagensParaPreCarregar = [
    "/raider/Raider_2/Idle.png",
    "/raider/Raider_2/Shot_1.png",
    "/raider/Raider_2/Shot_2.png",
    "/raider/Raider_2/Attack.png",
    "/raider/Raider_2/Dead.png",
    "/raider/Raider_2/Hurt.png",
    "/raider/Raider_2/Jump.png",
    "/raider/Raider_2/Recharge.png",
    "/raider/Raider_2/Run.png",
    "/raider/Raider_2/Walk.png",
    "/raider/Raider_3/Attack_1.png",
    "/raider/Raider_3/Attack_2.png",
    "/raider/Raider_3/Attack_3.png",
    "/raider/Raider_3/Dead.png",
    "/raider/Raider_3/Hurt.png",
    "/raider/Raider_3/Idle_2.png",
    "/raider/Raider_3/Idle.png",
    "/raider/Raider_3/Jump.png",
    "/raider/Raider_3/Run.png",
    "/raider/Raider_3/Walk.png",
];

let imagensPreCarregadas = imagensParaPreCarregar.map(caminho => {
    let imagem = new Image();
    imagem.src = caminho;
    return imagem;
});