
export const formatDate = (isoDateString) => {

    // Cria um objeto Date a partir da string no formato ISO 8601
    const date = new Date(isoDateString);
  
    // Função auxiliar para adicionar zero à esquerda
    const pad = (num) => (num < 10 ? '0' + num : num);
  
    // Extraindo as partes da data
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // O mês é indexado de 0
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    // Monta a string no formato d/m/Y H:i:s
    return `${day}/${month}/${year}`;
  }
  

export const messageErrorAxios = (errors) => {
    let message = '';
    Object.keys(errors).forEach(key => {
        message = message + errors[key] + '\n';
    });
    return message;
}


export const cpfIsValid = (cpf) => {
    let strCPF = cpf.split('.').join("").replace("-", '').split(' ').join('');

    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF === "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    return Resto === parseInt(strCPF.substring(10, 11));
}

export function removerUltimaOcorrencia(str, palavra) {
    // Encontre a última ocorrência da palavra
    var lastIndex = str.lastIndexOf(palavra);

    // Se a palavra não for encontrada, retorne a string original
    if (lastIndex === -1) {
        return str;
    }

    // Crie uma nova string sem a última ocorrência da palavra
    var novaString = str.slice(0, lastIndex) + str.slice(lastIndex + palavra.length);

    return novaString;
}

export const brazilianMoney = value => {
    return parseFloat(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}

export function brazilianRealToFloat(valorEmReais) {
    // Remove caracteres não numéricos, como "R$", "." (milhar) e "," (decimal)
    valorEmReais = valorEmReais.replace('R$ ', '').replace(/R\$/g, '');

    // Substitui a vírgula decimal por um ponto
    valorEmReais = valorEmReais.replace('.', '');

    valorEmReais = valorEmReais.replace(',', '.');

    return parseFloat(valorEmReais);
}

export const convertPointToComma = value => {
    const money = brazilianMoney(value);
    return money.split(' ')[1];
}

export const clearString = (document) => {
    if (document)
        return document.split('-').join('').split(' ').join('').split('.').join('').split('_').join('').split('/').join('').split('-').join('').split('(').join('').split(')').join('');

    return '';
}

export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function addMaskCpf(document) {
    let value = document.replace(/\D/g, ''); // Remove qualquer coisa que não seja dígito
    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 dígitos
    }

    // Aplica a máscara de CPF
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return value;
}

export const isObjectEmpty = (obj) => {

    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const uniquesValuesByKey = (arrayDeObjetos, key) => {

    // Array para armazenar os valores únicos do campo "id"
    var valoresUnicos = [];

    // Objeto auxiliar para rastrear valores únicos
    var valoresUnicosSet = new Set();

    // Loop pelos objetos no array
    for (var i = 0; i < arrayDeObjetos.length; i++) {
        var objeto = arrayDeObjetos[i];
        var valor = objeto[key]; // Selecione o campo desejado, neste caso, "id"

        // Verifique se o valor já existe no conjunto
        if (!valoresUnicosSet.has(valor)) {
            valoresUnicos.push(valor); // Adicione o valor ao array
            valoresUnicosSet.add(valor); // Adicione o valor ao conjunto para evitar duplicatas
        }
    }

    return valoresUnicos;
}

export const uniqueObjectsKeyBased = (arr, coluna) => {
    var chaves = {};
    var resultado = [];

    for (var i = 0; i < arr.length; i++) {
        var objeto = arr[i];
        var chave = objeto[coluna];

        if (!chaves[chave]) {
            resultado.push(objeto);
            chaves[chave] = true;
        }
    }

    return resultado;
}

// Função para somar meses a uma data no formato "YYYY-MM-DD"
function addMonths(data, meses) {
    const partesData = data.split('-');
    const ano = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    const novaData = new Date(ano, mes - 1 + meses, dia);

    // Formatar a data para "d/m/Y"
    const diaFormatado = novaData.getDate().toString().padStart(2, '0');
    const mesFormatado = (novaData.getMonth() + 1).toString().padStart(2, '0');
    const anoFormatado = novaData.getFullYear();

    return `${diaFormatado}/${mesFormatado}/${anoFormatado}`;
}

const today = (dayAdd = 0) => {
    // Obter a data de hoje
    const dataDeHoje = new Date();

    // Adicionar 1 dia
    dataDeHoje.setDate(dataDeHoje.getDate() + dayAdd);

    // Formatar a data para "YYYY-MM-DD"
    const ano = dataDeHoje.getFullYear();
    const mes = (dataDeHoje.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataDeHoje.getDate().toString().padStart(2, '0');

    const dataFormatada = `${ano}-${mes}-${dia}`;

    return dataFormatada;

}


export function saoObjetosIguais(objA, objB) {
    // Verifique se as propriedades do objeto são iguais
    return objA.id === objB.id && objA.nome === objB.nome;
}

export function removerObjetosDuplicados(array) {
    var objetosUnicos = [];

    for (var i = 0; i < array.length; i++) {
        var objetoAtual = array[i];
        var objetoDuplicado = false;

        for (var j = 0; j < objetosUnicos.length; j++) {
            if (saoObjetosIguais(objetoAtual, objetosUnicos[j])) {
                objetoDuplicado = true;
                break;
            }
        }

        if (!objetoDuplicado) {
            objetosUnicos.push(objetoAtual);
        }
    }

    return objetosUnicos;
}

export const isValidDate = (dateString) => {
    // Verifique o formato da data "YYYY-MM-DD" usando uma expressão regular
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return false;
    }

    // Tente criar um objeto de data a partir da string
    const date = new Date(dateString);

    // Verifique se o objeto de data é válido e se a data é a mesma da string original
    return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === dateString;
}

export const removeDuplicates = (array, key) => {
    const uniqueObject = {};
    const resultArray = [];

    array.forEach(item => {
        const itemValue = item[key];

        if (!uniqueObject[itemValue]) {
            uniqueObject[itemValue] = true;
            resultArray.push(item);
        }
    });

    return resultArray;
}

export const getAge = dateString => {
    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const firstLetterUppercase = word => {
    return word[0].toUpperCase() + word.substring(1);
}

export const getBadgeColor = (status) => {
    switch (status) {
      case 'PENDENTE':
        return 'warning'; // Pendente pode ser amarelo
      case 'GUIA GERADA':
        return 'info';    // Informação que uma guia foi gerada
      case 'PENDENTE CONFIRMAÇÃO':
        return 'secondary'; // Esperando confirmação
      case 'REJEITADO':
        return 'danger';   // Rejeitado é uma situação crítica
      case 'EM ROTA':
        return 'success';  // Em rota, algo positivo
      case 'EM DEPÓSITO DE ORIGEM':
        return 'light';    // Status neutro
      case 'CANCELADO':
        return 'dark';     // Cancelado pode ser considerado negativo
      case 'A CAMINHO DA RECOLHA':
        return 'info';     // Informação sobre coleta
      case 'ATRIBUÍDO À ZONA':
        return 'success';  // Positivo, atribuído
      case 'EM TRANSFERÊNCIA NACIONAL':
        return 'info';     // Informativo
      case 'EM DISTRIBUIÇÃO':
        return 'success';  // Positivo, já em distribuição
      case 'DESPACHADA':
        return 'success';  // Positivo, já despachada
      case 'EM DEPÓSITO DE DESTINO':
        return 'light';    // Neutro
      case 'EM PROCESSAMENTO':
        return 'warning';  // Em processamento pode ser um aviso
      case 'EM DEPÓSITO DA TRANSPORTADORA':
        return 'light';    // Neutro
      case 'NOVO':
        return 'info';     // Informação nova
      case 'ENTREGUE':
        return 'success';  // Entregue, um status positivo
      case 'EM DEPÓSITO DROPI':
        return 'light';    // Neutro
      case 'RECLAME NO ESCRITÓRIO':
        return 'warning';  // Precisa de atenção
      case 'EM DISTRIBUIÇÃO':
        return 'success';  // Positivo
      case 'TENTATIVA DE ENTREGA':
        return 'warning';  // Situação que pode ser problemática
      case 'EM ESPERA DE ROTA DOMÉSTICA':
        return 'warning';  // Em espera, situação não ideal
      case 'ADMITIDA':
        return 'success';  // Positivo, admitida
      case 'DEPÓSITO DE DESTINO':
        return 'light';    // Neutro
      case 'NOVO SOLUCIONADO':
        return 'success';  // Positivo, problema solucionado
      case 'EM REEXPEDIÇÃO':
        return 'info';     // Informação sobre reexpedição
      case 'A CAMINHO':
        return 'success';  // Positivo
      case 'DEVOLUÇÃO':
        return 'danger';   // Situação negativa
      case 'REENVIO':
        return 'info';     // Informação sobre reenvio
      case 'TELEMARKETING':
        return 'light';    // Neutro
      case 'DEVOLTA':
        return 'success';  // Positivo, devolução realizada
      case 'DEVOLUÇÃO EM TRÂNSITO':
        return 'warning';  // Precisa de atenção
      case 'EM PROCESSO DE DEVOLUÇÃO':
        return 'warning';  // Em processo, situação de atenção
      case 'RECIBIDO POR DROPI':
        return 'success';  // Positivo, recebido
      default:
        return 'secondary'; // Para status desconhecidos
    }
};
  

export const translateStatusOrderDropi = (status) => {
        switch (status) {
          case 'PENDIENTE':
            return 'PENDENTE';
          case 'GUIA_GENERADA':
            return 'GUIA GERADA';
          case 'PENDIENTE CONFIRMACION':
            return 'PENDENTE CONFIRMAÇÃO';
          case 'RECHAZADO':
            return 'REJEITADO';
          case 'EN RUTA':
            return 'EM ROTA';
          case 'EN BODEGA ORIGEN':
            return 'EM DEPÓSITO DE ORIGEM';
          case 'CANCELADO':
            return 'CANCELADO';
          case 'EN CAMINO A LA RECOGIDA':
            return 'A CAMINHO DA RECOLHA';
          case 'ASIGNADO A ZONA':
            return 'ATRIBUÍDO À ZONA';
          case 'EN TRASLADO NACIONAL':
            return 'EM TRANSFERÊNCIA NACIONAL';
          case 'EN REPARTO':
            return 'EM DISTRIBUIÇÃO';
          case 'DESPACHADA':
            return 'DESPACHADA';
          case 'EN BODEGA DESTINO':
            return 'EM DEPÓSITO DE DESTINO';
          case 'EN PROCESAMIENTO':
            return 'EM PROCESSAMENTO';
          case 'EN BODEGA TRANSPORTADORA':
            return 'EM DEPÓSITO DA TRANSPORTADORA';
          case 'NOVEDAD':
            return 'NOVO';
          case 'ENTREGADO':
            return 'ENTREGUE';
          case 'EN BODEGA DROPI':
            return 'EM DEPÓSITO DROPI';
          case 'RECLAME EN OFICINA':
            return 'RECLAME NO ESCRITÓRIO';
          case 'EN DISTRIBUCION':
            return 'EM DISTRIBUIÇÃO';
          case 'INTENTO DE ENTREGA':
            return 'TENTATIVA DE ENTREGA';
          case 'EN ESPERA DE RUTA DOMESTICA':
            return 'EM ESPERA DE ROTA DOMÉSTICA';
          case 'ADMITIDA':
            return 'ADMITIDA';
          case 'BODEGA DESTINO':
            return 'DEPÓSITO DE DESTINO';
          case 'NOVEDAD SOLUCIONADA':
            return 'NOVO SOLUCIONADO';
          case 'EN REEXPEDICION':
            return 'EM REEXPEDIÇÃO';
          case 'EN CAMINO':
            return 'A CAMINHO';
          case 'DEVOLUCION':
            return 'DEVOLUÇÃO';
          case 'REENVIO':
            return 'REENVIO';
          case 'TELEMERCADEO':
            return 'TELEMARKETING';
          case 'DEVUELTA':
            return 'DEVOLTA';
          case 'DEVOLUCION EN TRANSITO':
            return 'DEVOLUÇÃO EM TRÂNSITO';
          case 'EN PROCESO DE DEVOLUCION':
            return 'EM PROCESSO DE DEVOLUÇÃO';
          case 'RECIBIDO POR DROPI':
            return 'RECIBIDO POR DROPI';
          default:
            return 'STATUS DESCONHECIDO'; // Mensagem para status desconhecido
        
      }
}