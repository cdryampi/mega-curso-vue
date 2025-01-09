import { reactive } from "vue";

export const useCarrito = (db) => {
  const data = reactive({
    guitarras: db.map((guitarra) => ({
      ...guitarra,
      bloqueado: false,
    })),
    carrito: [],
    guitarra_principal: db[0],
  });

  const agregarCarrito = (guitarra) => {
    const guitarraOriginal = data.guitarras.find((g) => g.id === guitarra.id);

    if (!guitarraOriginal || guitarraOriginal.stock <= 0) {
      console.log("No hay stock");
      guitarra.bloqueado = true;
      return;
    }

    guitarraOriginal.stock--;

    const guitarraEnCarrito = data.carrito.find((g) => g.id === guitarra.id);

    if (guitarraEnCarrito) {
      guitarraEnCarrito.stock++;
    } else {
      data.carrito.push({
        ...guitarra,
        stock: 1,
      });
    }
  };

  const eliminarCarrito = (guitarra) => {
    data.guitarras = data.guitarras.map((g) =>
      g.id === guitarra.id
        ? { ...g, stock: g.stock + guitarra.stock, bloqueado: false }
        : g
    );

    data.carrito = data.carrito.filter(
      (producto) => producto.id !== guitarra.id
    );
  };

  const vaciarCarrito = () => {
    console.log("Vaciando carrito");

    data.carrito.forEach((producto) => {
      const guitarraOriginal = data.guitarras.find((g) => g.id === producto.id);
      if (guitarraOriginal) {
        guitarraOriginal.stock += producto.stock;
        guitarraOriginal.bloqueado = false;
      }
    });

    data.carrito = [];
  };

  const quitarProducto = (guitarra) => {
    const guitarraOriginal = data.guitarras.find((g) => g.id === guitarra.id);

    if (guitarraOriginal) {
      guitarraOriginal.bloqueado = false;
      guitarraOriginal.stock++;
    }

    if (guitarra.stock > 1) {
      guitarra.stock--;
    } else {
      eliminarCarrito(guitarra);
    }
  };

  return {
    data,
    agregarCarrito,
    eliminarCarrito,
    vaciarCarrito,
    quitarProducto,
  };
};
