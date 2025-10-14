var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fs = require('fs');
var readline = require('readline');
function calcularMedia(notas) {
    var soma = notas.reduce(function (a, b) { return a + b; }, 0);
    return soma / notas.length;
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function coletarNotas(materia) {
            return __awaiter(this, void 0, void 0, function () {
                var i, nota, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log("Digite 8 notas para ".concat(materia, ":"));
                            i = 0;
                            _b.label = 1;
                        case 1:
                            if (!(i < 8)) return [3 /*break*/, 4];
                            _a = parseFloat;
                            return [4 /*yield*/, question("Nota ".concat(i + 1, ": "))];
                        case 2:
                            nota = _a.apply(void 0, [_b.sent()]);
                            aluno.notas[materia].push(nota);
                            _b.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        var rl, question, aluno, _a, _b, medias, mediaFinal, totalAulas, percentualPresenca, aprovado, boletim, csv;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    question = function (q) { return new Promise(function (res) { return rl.question(q, res); }); };
                    _c = {};
                    return [4 /*yield*/, question('Nome do aluno: ')];
                case 1:
                    _c.nome = _d.sent();
                    return [4 /*yield*/, question('Série: ')];
                case 2:
                    aluno = (_c.serie = _d.sent(),
                        _c.faltas = 0,
                        _c.notas = {
                            matematica: [],
                            portugues: [],
                            geografia: [],
                            historia: [],
                            quimica: []
                        },
                        _c);
                    _a = aluno;
                    _b = parseInt;
                    return [4 /*yield*/, question('Número de faltas: ')];
                case 3:
                    _a.faltas = _b.apply(void 0, [_d.sent()]);
                    return [4 /*yield*/, coletarNotas('matematica')];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, coletarNotas('portugues')];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, coletarNotas('geografia')];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, coletarNotas('historia')];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, coletarNotas('quimica')];
                case 8:
                    _d.sent();
                    medias = {
                        matematica: calcularMedia(aluno.notas.matematica),
                        portugues: calcularMedia(aluno.notas.portugues),
                        geografia: calcularMedia(aluno.notas.geografia),
                        historia: calcularMedia(aluno.notas.historia),
                        quimica: calcularMedia(aluno.notas.quimica)
                    };
                    mediaFinal = calcularMedia(Object.values(medias));
                    totalAulas = 100;
                    percentualPresenca = ((totalAulas - aluno.faltas) / totalAulas) * 100;
                    aprovado = percentualPresenca >= 75 && mediaFinal >= 7;
                    boletim = "\nAluno: ".concat(aluno.nome, "\nS\u00E9rie: ").concat(aluno.serie, "\nFaltas: ").concat(aluno.faltas, " (").concat(percentualPresenca.toFixed(2), "% de presen\u00E7a)\nM\u00E9dias:\n  Matem\u00E1tica: ").concat(medias.matematica.toFixed(2), "\n  Portugu\u00EAs: ").concat(medias.portugues.toFixed(2), "\n  Geografia: ").concat(medias.geografia.toFixed(2), "\n  Hist\u00F3ria: ").concat(medias.historia.toFixed(2), "\n  Qu\u00EDmica: ").concat(medias.quimica.toFixed(2), "\nM\u00E9dia Final: ").concat(mediaFinal.toFixed(2), "\n\nResultado: ").concat(aprovado ? 'APROVADO' : 'REPROVADO', "\n");
                    fs.writeFileSync('boletim.txt', boletim);
                    console.log('Boletim salvo em boletim.txt');
                    csv = "\"Nome\",\"S\u00E9rie\",\"Faltas\",\"Presen\u00E7a %\",\"M\u00E9dia Final\",\"Resultado\"\n" +
                        "\"".concat(aluno.nome, "\",\"").concat(aluno.serie, "\",").concat(aluno.faltas, ",").concat(percentualPresenca.toFixed(2), ",").concat(mediaFinal.toFixed(2), ",\"").concat(aprovado ? 'APROVADO' : 'REPROVADO', "\"\n");
                    fs.writeFileSync('alunos.csv', csv);
                    console.log('Dados salvos em alunos.csv');
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
