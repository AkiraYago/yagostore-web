const mergeObjects = (arr) => {
  const result = [];
  const map = new Map();

  arr.forEach(item => {
    if (map.has(item.id)) {
      // Si el objeto ya existe, incrementa la cantidad
      map.get(item.id).quantity += item.quantity;
    } else {
      // Si el objeto no existe, agrégalo al mapa
      map.set(item.id, { ...item });
    }
  });

  // Convertir el mapa a un array de objetos
  map.forEach(value => result.push(value));

  return result;
}

export default mergeObjects;