String.prototype.toPLang = function () {
    return `P ${this}`
}

console.log('teste'.toPLang())

// Você pode mudar o objeto de um protótipo
// Obs: Não é recomendado