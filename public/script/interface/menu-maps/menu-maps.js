// Variável global para armazenar os mapas de forma cacheada
// Evita fazer múltiplos fetches ao JSON se já carregamos antes
let mapsCache = null;

// Exporta uma função assíncrona que retorna os mapas do menu
export async function getMenuMaps() {
  
  // Se já existe cache, retorna imediatamente, sem refazer o fetch
  if (mapsCache) return mapsCache; // usa cache se já carregou antes

  // Faz a requisição para carregar o arquivo menu.json
  // Caminho absoluto relativo à raiz do servidor
  const res = await fetch('/public/data/menu.json');

  // Converte a resposta em JSON
  const menu = await res.json();

  // Cria um objeto para mapear os IDs das pizzas para seus nomes
  // Ex.: pizzasMap['p1'] = "Calabresa"
  const pizzasMap = {};
  menu.pizzas.forEach(f => pizzasMap[f.id] = f.name);

  // Cria um objeto para mapear os IDs dos tamanhos de pizza para seus nomes
  // Ex.: sizeMap['s1'] = "Pequena"
  const sizeMap = {};
  menu.sizes.forEach(s => sizeMap[s.id] = s.name);

  // Cria um objeto para mapear os IDs das bordas para seus nomes
  // Ex.: borderMap['b1'] = "Catupiry"
  const borderMap = {};
  menu.borders.forEach(b => borderMap[b.id] = b.name);

  // Cria um objeto para mapear os IDs das bebidas para seus nomes
  // Ex.: drinkMap['d1'] = "Coca-Cola"
  const drinkMap = {};
  menu.drinks.forEach(d => drinkMap[d.id] = d.name);

  // Armazena todos os mapas no cache para reutilização futura
  mapsCache = { pizzasMap, sizeMap, borderMap, drinkMap };

  // Retorna os mapas para uso em outros arquivos
  return mapsCache;
}
