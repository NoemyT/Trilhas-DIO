const pokeList = document.getElementById('pokeList')
const loadMore = document.getElementById('loadMore')
const maxRecords = 493
const limit = 12
let offset = 386;

function pkToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="dexnum">#${pokemon.dexnum}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.sprite}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokeList.innerHTML += pokemons.map(pkToLi).join('')
    })
}

loadPokemons(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit
    const nextPageRecords = offset + limit

    if (nextPageRecords >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemons(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemons(offset, limit)
    }
})