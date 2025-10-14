const fs = require('fs');
const readline = require('readline');

interface Aluno {
  nome: string;
  serie: string;
  faltas: number;
  notas: {
    matematica: number[];
    portugues: number[];
    geografia: number[];
    historia: number[];
    quimica: number[];
  };
}

function calcularMedia(notas: number[]): number {
  const soma = notas.reduce((a, b) => a + b, 0);
  return soma / notas.length;
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (q: string) => new Promise<string>(res => rl.question(q, res));

  const aluno: Aluno = {
    nome: await question('Nome do aluno: '),
    serie: await question('Série: '),
    faltas: 0,
    notas: {
      matematica: [],
      portugues: [],
      geografia: [],
      historia: [],
      quimica: []
    }
  };

  aluno.faltas = parseInt(await question('Número de faltas: '));

  async function coletarNotas(materia: keyof Aluno['notas']) {
    console.log(`Digite 8 notas para ${materia}:`);
    for (let i = 0; i < 8; i++) {
      const nota = parseFloat(await question(`Nota ${i + 1}: `));
      aluno.notas[materia].push(nota);
    }
  }

  await coletarNotas('matematica');
  await coletarNotas('portugues');
  await coletarNotas('geografia');
  await coletarNotas('historia');
  await coletarNotas('quimica');

  const medias = {
    matematica: calcularMedia(aluno.notas.matematica),
    portugues: calcularMedia(aluno.notas.portugues),
    geografia: calcularMedia(aluno.notas.geografia),
    historia: calcularMedia(aluno.notas.historia),
    quimica: calcularMedia(aluno.notas.quimica)
  };

  const mediaFinal = calcularMedia(Object.values(medias));

  const totalAulas = 100;
  const percentualPresenca = ((totalAulas - aluno.faltas) / totalAulas) * 100;

  const aprovado = percentualPresenca >= 75 && mediaFinal >= 7;

  const boletim = `
Aluno: ${aluno.nome}
Série: ${aluno.serie}
Faltas: ${aluno.faltas} (${percentualPresenca.toFixed(2)}% de presença)
Médias:
  Matemática: ${medias.matematica.toFixed(2)}
  Português: ${medias.portugues.toFixed(2)}
  Geografia: ${medias.geografia.toFixed(2)}
  História: ${medias.historia.toFixed(2)}
  Química: ${medias.quimica.toFixed(2)}
Média Final: ${mediaFinal.toFixed(2)}

Resultado: ${aprovado ? 'APROVADO' : 'REPROVADO'}
`;

  fs.writeFileSync('boletim.txt', boletim);
  console.log('Boletim salvo em boletim.txt');

  const csv = `"Nome","Série","Faltas","Presença %","Média Final","Resultado"\n` +
              `"${aluno.nome}","${aluno.serie}",${aluno.faltas},${percentualPresenca.toFixed(2)},${mediaFinal.toFixed(2)},"${aprovado ? 'APROVADO' : 'REPROVADO'}"\n`;

  fs.writeFileSync('alunos.csv', csv);
  console.log('Dados salvos em alunos.csv');

  rl.close();
}

main();
