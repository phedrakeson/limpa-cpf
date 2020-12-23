const listaCpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCpf = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCpfs = (cpfs) => {
  return cpfs.map(limparCpf).map(construirCpf);
}

const substituirCpfs = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const listaCpfsFormatada = formatarCpfs(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = listaCpfsFormatada[index];
  })

  console.log(listaCpfsFormatada);
}

substituirCpfs(listaCpfs);