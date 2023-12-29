export function createData(
    nombre: string,
    fechaNacimiento: string,
    genero: string,
    id?: string,
    acciones?: ""
  ) {
    return { nombre, fechaNacimiento, genero, id, acciones };
  }