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
//     <p><strong>&nbsp; &nbsp;Poder&iacute;amos falar muitas coisas de Samuel. Ele foi um servo de Deus extremamente obediente. Por&eacute;m vamos nos atentar a hist&oacute;ria de seu nascimento. Ele foi resposta de ora&ccedil;&atilde;o a uma mulher chamada Ana que n&atilde;o podia ter filhos:</strong></p>

// <blockquote class="blockquote">
// <p><strong><u>[10] e, com a alma amargurada, chorou muito e orou ao Senhor. [11] E fez um voto, dizendo: &ldquo;&Oacute; Senhor dos Ex&eacute;rcitos, se tu deres aten&ccedil;&atilde;o &agrave; humilha&ccedil;&atilde;o de tua serva, te lembrares de mim e n&atilde;o te esqueceres de tua serva, mas lhe deres um filho, ent&atilde;o eu o dedicarei ao Senhor por todos os dias de sua vida, e o seu cabelo e a sua barba nunca ser&atilde;o cortados&rdquo;. (1 Samuel 1:10-11)</u></strong></p>
// </blockquote>

// <p><strong>Ana pediu um filho a Deus, mas disse que se Deus desse, ela o entregaria de volta ao Senhor. No sentido de que Samuel serviria a Deus durante toda a vida dele.</strong></p>

// <p><strong>A B&iacute;blia diz que Deus se lembrou de Ana e lhe deu Samuel:</strong></p>

// <blockquote class="blockquote">
// <p><strong><u>[20] Assim Ana engravidou e, no devido tempo, deu &agrave; luz um filho. E deu-lhe o nome de Samuel, dizendo: &ldquo;Eu o pedi ao Senhor&rdquo;. (1 Samuel 1:20)</u></strong></p>
// </blockquote>

// <p><strong>Hoje damos o nome do nosso menino de Samuel pois nos identificamos com a hist&oacute;ria de Ana. A Karol foi diagnosticada com endometriose in&iacute;cio de 2023 e a m&eacute;dica j&aacute; disse &quot;do jeito que seu &uacute;tero est&aacute; voc&ecirc; n&atilde;o vai conseguir engravidar se n&atilde;o operar e n&atilde;o colocar DIU&quot;. N&oacute;s concordamos como casal ap&oacute;s orarmos e Deus nos tocar que n&atilde;o era a hora de operar. Optamos pela tratamento natural antiinflamat&oacute;rio. Tivemos que ter uma alimenta&ccedil;&atilde;o mais regrada aqui em casa, pr&aacute;tica de exerc&iacute;cios f&iacute;sicos e juntos emagrecemos muito tamb&eacute;m. Quando chegou em 2024 para repeti&ccedil;&atilde;o dos exames, descobri que a endometriose tinha avan&ccedil;ado mais e venho a pergunta &quot;mas Deus nos tocou para seguir com o tratamento natural. Onde erramos&quot;? Desde ent&atilde;o a Karol j&aacute; vinha pedindo um filho a Deus. Foi ent&atilde;o que 1 m&ecirc;s depois do exame da endometriose, descobrimos que estamos gr&aacute;vidos. Foi uma alegria. Lembro de uma outra m&eacute;dica querida (Dra Mayara Rodrigues) que disse &quot;Sua cura chegou&quot; porque ela me disse que a gravidez cura grande parte da endometriose.</strong></p>

// <p><strong>&Eacute;...Deus &eacute; especialista em milagres. Mesmo quando tudo parece contr&aacute;rio. Para ele nada &eacute; imposs&iacute;vel:</strong></p>

// <blockquote class="blockquote">
// <p><strong><u>[37] Pois nada &eacute; imposs&iacute;vel para Deus&rdquo;. (Lucas 1:37)</u></strong></p>
// </blockquote>

// <p><strong>&nbsp; &nbsp;Desde quando Deus nos presentou com esse beb&ecirc;, j&aacute; temos orado para que Ele ame ao Senhor mais do que tudo. E nosso desejo para o nosso Samuel &eacute; que Ele seja um servo de Deus fiel e obediente durante toda a sua vida.</strong></p>
// `
// };

const baby = {
    sex: 'female',
    title: 'Nossa <span style="color: rgba(253, 0, 219, 0.7)">menina</span> está chegando !',
    name: 'Ester',
    lastname: 'Gomes Bento',
    about: `
    <p><strong>&nbsp; &nbsp;Ester foi uma mulher na B&iacute;blia que Deus colocou na posi&ccedil;&atilde;o de rainha por um motivo muito importante: salvar o povo judeu. Ham&atilde; foi um homem mal que queria exterminar o povo de Deus. Naquela &eacute;poca n&atilde;o era permitido que nem mesmo a rainha entrasse na presen&ccedil;a do Rei sem ser convidada. Por&eacute;m Ester precisava dizer ao Rei o plano de Ham&atilde; e solicitar ajuda para salvar o seu povo. Ela teve medo, mas seu primo Mardoqueu a encorajou e lembrou-a de que Deus havia colocado ela na posi&ccedil;&atilde;o de rainha:</strong></p>

<blockquote class="blockquote">
<p style="text-align: justify;"><strong><u>[12] Quando Mardoqueu recebeu a resposta de Ester, [13] mandou dizer-lhe: &ldquo;N&atilde;o pense que pelo fato de estar no pal&aacute;cio do rei, voc&ecirc; ser&aacute; a &uacute;nica entre os judeus que escapar&aacute;, [14] pois, se voc&ecirc; ficar calada nesta hora, socorro e livramento surgir&atilde;o de outra parte para os judeus, mas voc&ecirc; e a fam&iacute;lia do seu pai morrer&atilde;o. Quem sabe se n&atilde;o foi para um momento como este que voc&ecirc; chegou &agrave; posi&ccedil;&atilde;o de rainha?&rdquo; (Ester 4:12-14).</u></strong></p>
</blockquote>

<p><strong>A resposta de Ester mostra sua postura de verdadeira serva de Deus disposta a fazer a vontade Dele:</strong></p>

<blockquote class="blockquote">
<p><u><strong>[16] &ldquo;V&aacute; reunir todos os judeus que est&atilde;o em Sus&atilde;, e jejuem em meu favor. N&atilde;o comam nem bebam durante tr&ecirc;s dias e tr&ecirc;s noites. Eu e minhas criadas jejuaremos como voc&ecirc;s. Depois disso irei ao rei, ainda que seja contra a lei. Se eu tiver que morrer, morrerei&rdquo; (Ester 4:16).</strong></u></p>
</blockquote>

<p><strong>Se continuarmos lendo veremos que com essa postura de obedi&ecirc;ncia e submiss&atilde;o ao Senhor, Deus usou Ester para salvar o Seu Povo. Que privil&eacute;gio. Isso nos leva a refletir que muitas vezes Deus nos d&aacute; posi&ccedil;&otilde;es ou privil&eacute;gios para realizar sua obra aqui na terra e para que Ele seja glorificado.</strong></p>

<p><strong>&nbsp; &nbsp; Nosso desejo para nossa Ester &eacute; que ela esteja disposta a servir, obedecer e amar a Jesus mesmo que sua vida esteja em jogo. Sabemos que nada nesse mundo pode trazer qualquer preenchimento verdadeiro a nossa Ester sen&atilde;o Nosso &Uacute;nico e Suficiente Salvador: Jesus!&#39;</strong></p>

<address>&nbsp;</address>

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
}

function reset()
{
    window.location.reload();
}