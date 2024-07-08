var step_1 = document.querySelector('.step-1');
var btn_start = document.querySelector('.btn-start');
var gif_drum_roll = document.querySelector('.gif-drum-roll');
var img_drum_roll = document.querySelector('.img-drum-roll');
var audio_drum_roll = new Audio('assets/audio/drum-roll.mp3');
audio_drum_roll.addEventListener("ended", function(){
    stopDrumRollEvent();
});

var step_2 = document.querySelector('.step-2');
var btn_pop_ballon = document.querySelector('.btn-pop-ballon');
var mainSvg = document.querySelector('.main-svg');
var secondSvg = document.querySelector('.second-svg');
var thirdSvg = document.querySelector('.third-svg');
var fourthSvg = document.querySelector('.fourth-svg');
var needle = document.querySelector('.needle');
var audio = new Audio('assets/audio/balloon-popping.mp3');

var step_3 = document.querySelector('.step-3');
var h1_title = document.querySelector(".h1-title");

var step_4 = document.querySelector('.step-4');
var h1_name = document.querySelector(".h1-name");
var p_about = document.querySelector('.p-about');

// const baby = {
//     sex: 'male',
//     title: 'Nosso <span style="color: rgba(0, 0, 255, 0.7)">menino</span> está chegando !',
//     name: 'Samuel ',
//     lastname: 'Gomes Bento',
//     about: `
//    Poderíamos falar muitas coisas de Samuel. Ele foi um servo de Deus extremamente obediente. Porém vamos nos atentar a história de seu nascimento. Ele foi resposta de oração a uma mulher chamada Ana que não podia ter filhos: 

// [10] e, com a alma amargurada, chorou muito e orou ao Senhor. [11] E fez um voto, dizendo: “Ó Senhor dos Exércitos, se tu deres atenção à humilhação de tua serva, te lembrares de mim e não te esqueceres de tua serva, mas lhe deres um filho, então eu o dedicarei ao Senhor por todos os dias de sua vida, e o seu cabelo e a sua barba nunca serão cortados”.
// (1 Samuel 1:10-11)

// Ana pediu um filho a Deus, mas disse que se Deus desse, ela o entregaria de volta ao Senhor. No sentido de que Samuel serviria a Deus durante toda a vida dele.

// A Bíblia diz que Deus se lembrou de Ana e lhe deu Samuel: 

// [20] Assim Ana engravidou e, no devido tempo, deu à luz um filho. E deu-lhe o nome de Samuel, dizendo: “Eu o pedi ao Senhor”. 
// (1 Samuel 1:20)

// Hoje damos o nome do nosso menino de Samuel pois nos identificamos com a história de Ana. A Karol foi diagnosticada com endometriose início de 2023 e a médica já disse "do jeito que seu útero está você não vai conseguir engravidar se não operar e não colocar DIU". Nós concordamos como casal após orarmos e Deus nos tocar que não era a hora de operar. Optamos pela tratamento natural antiinflamatório. Tivemos que ter uma alimentação mais regrada aqui em casa, prática de exercícios físicos e juntos emagrecemos muito também. Quando chegou em 2024 para repetição dos exames, descobri que a endometriose tinha avançado mais e venho a pergunta "mas Deus nos tocou para seguir com o tratamento natural. Onde erramos"? Desde então a Karol já vinha pedindo um filho a Deus. Foi então que 1 mês depois do exame da endometriose, descobrimos que estamos grávidos. Foi uma alegria. Lembro de uma outra médica querida (Dra Mayara Rodrigues) que disse "Sua cura chegou" porque ela me disse que a gravidez cura grande parte da endometriose.
// É...Deus é especialista em milagres. Mesmo quando tudo parece contrário. Para ele nada é impossível: 

// [37] Pois nada é impossível para Deus”.
// (Lucas 1:37)

// Desde quando Deus nos presentou com esse bebê, já temos orado para que Ele ame ao Senhor mais do que tudo. E nosso desejo para o nosso Samuel é que Ele seja um servo de Deus fiel e obediente durante toda a sua vida.`
// };

const baby = {
    sex: 'female',
    title: 'Nossa <span style="color: rgba(253, 0, 219, 0.7)">menina</span> está chegando !',
    name: 'Ester',
    lastname: 'Gomes Bento',
    about: `Ester foi uma mulher na Bíblia que Deus colocou na posição de rainha por um motivo muito importante: salvar o povo judeu. Hamã foi um homem mal que queria exterminar o povo de Deus. 
    Naquela época não era permitido que nem mesmo a rainha entrasse na presença do Rei sem ser convidada. Porém Ester precisava dizer ao Rei o plano de Hamã e solicitar ajuda para salvar o seu povo. Ela teve medo, mas seu primo Mardoqueu a encorajou e lembrou-a de que Deus havia colocado ela na posição de rainha:
    [12] Quando Mardoqueu recebeu a resposta de Ester, [13] mandou dizer-lhe: “Não pense que pelo fato de estar no palácio do rei, você será a única entre os judeus que escapará, [14] pois, se você ficar calada nesta hora, socorro e livramento surgirão de outra parte para os judeus, mas você e a família do seu pai morrerão. Quem sabe se não foi para um momento como este que você chegou à posição de rainha?”
    (Ester 4:12-14)\n\nA resposta de Ester mostra sua postura de verdadeira serva de Deus disposta a fazer a vontade Dele:
    [16] “Vá reunir todos os judeus que estão em Susã, e jejuem em meu favor. Não comam nem bebam durante três dias e três noites. Eu e minhas criadas jejuaremos como vocês. Depois disso irei ao rei, ainda que seja contra a lei. Se eu tiver que morrer, morrerei”.
    (Ester 4:16)\n\nSe continuarmos lendo veremos que com essa postura de obediência e submissão ao Senhor, Deus usou Ester para salvar o Seu Povo. Que privilégio. Isso nos leva a refletir que muitas vezes Deus nos dá posições ou privilégios para realizar sua obra aqui na terra e para que Ele seja glorificado.
    Nosso desejo para nossa Ester é que ela esteja disposta a servir, obedecer e amar a Jesus mesmo que sua vida esteja em jogo. Sabemos que nada nesse mundo pode trazer qualquer preenchimento verdadeiro a nossa Ester senão Nosso Único e Suficiente Salvador: Jesus!'
  `
};

showStep1();

function showStep1()
{
    step_1.style.display = "block";
    step_2.style.display = "none";
    step_3.style.display = "none";
    step_4.style.display = "none";
    gif_drum_roll.style.display = 'none';
    img_drum_roll.style.display = 'block';
}

function showStep2()
{
    step_1.style.display = "none";
    step_2.style.display = "block";
    step_3.style.display = "none";
    step_4.style.display = "none";
    startDrumRollEvent()
    createBalloons(30);
}

function showStep3()
{
    createBalloons(30);
    h1_title.innerHTML = baby.title;
    h1_name.innerHTML = baby.name;
    step_1.style.display = "none";
    step_2.style.display = "none";
    step_3.style.display = "block";
    step_4.style.display = "none";
}

function showStep4()
{
    h1_title.innerHTML = baby.title;
    h1_name.innerHTML = baby.name;
    p_about.innerHTML = baby.about;
    step_1.style.display = "none";
    step_2.style.display = "none";
    step_3.style.display = "none";
    step_4.style.display = "block";
    removeBalloons();
}