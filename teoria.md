# Vocavulario de teoria de Vue 3

## ¿que son los Single File Components?

Los Single File Components son archivos que contienen todo lo necesario para definir un componente de Vue. Estos archivos tienen la extensión `.vue` y contienen tres secciones principales: `<template>`, `<script>` y `<style>`.

### Caracteristicas

- Vue utiliza compoenentes para la creación de aplicaciones y sitios web.
- Un Componente debe tener la extensión `.vue`.
- Un Componente usualmente tiene 2 propósitos: ser reutilizable o separar la funcionalidad de la aplicación. Si se cumplen ambos, mejor.
- Un Componente puede tener 3 secciones: `<template>`, `<script>` y `<style>`:
- Los scripts de los componentes pueden tener propiedades, métodos, computados, watch y hooks de ciclo de vida. Són los datos y la lógica del componente.
- Las plantillas son la parte de un componente de Vue que define la estructura del DOM que el componente renderizará. Las plantillas de Vue son HTML con algunas extensiones de sintaxis de Vue. Por ejemplo, puedes usar interpolación de texto, directivas y enlaces de datos en las plantillas de Vue.
- El estilo es la parte de un componente de Vue que define los estilos CSS que se aplicarán al componente. Puedes usar CSS puro, preprocesadores CSS como SASS o LESS, y también puedes usar scoped styles para limitar los estilos a un componente específico.

## ¿Qué es el template?

Las plantillas son la parte de un componente de Vue que define la estructura del DOM que el componente renderizará. Las plantillas de Vue son HTML con algunas extensiones de sintaxis de Vue. Por ejemplo, puedes usar interpolación de texto, directivas y enlaces de datos en las plantillas de Vue.

```
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
```

## ¿Qué es el script?

El script es la parte de un componente de Vue que define la lógica y el estado del componente. En el script, puedes definir propiedades, métodos, computados, watch y hooks de ciclo de vida del componente.

```
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
```

## ¿Qué es el style?

El estilo es la parte de un componente de Vue que define los estilos CSS que se aplicarán al componente. Puedes usar CSS puro, preprocesadores CSS como SASS o LESS, y también puedes usar scoped styles para limitar los estilos a un componente específico.

```
<style scoped>
h1 {
  color: red;
}
</style>
```

## API styles

### Options API

Las options API son una forma de definir componentes en Vue utilizando un objeto de opciones. En la options API, defines las propiedades, métodos, computados, watch y hooks de ciclo de vida del componente en un objeto JavaScript.

```js
export default {
    components: { Productos },
  data() {
    return {
      productos: [],
      carrito: []
    };
  },
  mounted(){
    fetch('https://api.example.com/productos')
      .then(response => response.json())
      .then(data => this.productos = data)
    },
  },
  methods: {
    agregarCarrito(producto) {
      this.carrito.push(producto)
    },
  },
};
```

### Composition API

La Composition API es una nueva forma de definir componentes en Vue que permite organizar la lógica del componente en funciones reutilizables. En la Composition API, defines la lógica del componente en funciones y luego las importas y las usas en el componente principal.
OJO: para utilizar el composition API en el script se ha de poner el setup como atributo al iniciar el script, si no vue interpretará el script como options API.

```js
import { ref } from "vue";
const productos = ref([]);
const carrito = ref([]);

const consultarAPI = () => {
  fetch("https://api.example.com/productos")
    .then((response) => response.json())
    .then((data) => (productos.value = data));
};
consultarAPI();
const agregarCarrito = (producto) => {
  carrito.value.push(producto);
};
```

## State

El estado representa los datos de una aplicación en un momento específico. En Vue, el estado se almacena en el objeto `data` de un componente y se puede acceder y modificar a través de sus propiedades.

### ref

La función `ref` de Vue se utiliza para crear una referencia reactiva a un valor primitivo. Las referencias reactivas son objetos que contienen un valor y permiten que Vue rastree y reaccione a los cambios en ese valor.

```js
import { ref } from "vue";

const count = ref(0);

console.log(count.value); // 0

count.value++; // 1

console.log(count.value); // 1
```

### reactive

La función `reactive` de Vue se utiliza para crear un objeto reactivo. Los objetos reactivos contienen propiedades que Vue puede rastrear y actualizar automáticamente cuando cambian.

```js
import { reactive } from "vue";

const state = reactive({
  count: 0,
});

console.log(state.count); // 0

state.count++; // 1

console.log(state.count); // 1
```

## Directivas de Vue

Las directivas de Vue son atributos especiales que se pueden agregar a elementos HTML en las plantillas de Vue para aplicar comportamientos dinámicos. Las directivas de Vue comienzan con el prefijo `v-` y se utilizan para enlazar datos, mostrar u ocultar elementos, escuchar eventos y más.

### v-if

La directiva `v-if` de Vue se utiliza para mostrar u ocultar un elemento HTML basado en una expresión condicional. Si la expresión es verdadera, el elemento se muestra; si la expresión es falsa, el elemento se oculta.

```html
<template>
  <div>
    <p v-if="showMessage">{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "Hello, Vue!",
        showMessage: true,
      };
    },
    methods: {
      toggleMessage() {
        this.showMessage = !this.showMessage;
      },
    },
  };
</script>
```

### v-for

La directiva `v-for` de Vue se utiliza para renderizar una lista de elementos basada en una matriz o un objeto. Puedes usar `v-for` para iterar sobre una matriz de elementos y renderizar un elemento para cada elemento en la matriz.

```html
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" },
        ],
      };
    },
  };
</script>
```

### v-on

La directiva `v-on` de Vue se utiliza para escuchar eventos en elementos HTML y ejecutar métodos en respuesta a esos eventos. Puedes usar `v-on` para escuchar eventos de clic, cambio, entrada y más.

```html
<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++;
      },
    },
  };
</script>
```

### v-model

La directiva `v-model` de Vue se utiliza para enlazar datos de formulario a propiedades en un componente de Vue. Puedes usar `v-model` para enlazar datos de entrada, selección y área de texto a propiedades en un componente.

```html
<template>
  <div>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "",
      };
    },
  };
</script>
```

## Props

Los props son atributos personalizados que se pueden pasar a un componente de Vue. Los props se utilizan para pasar datos de un componente padre a un componente hijo y permiten que los componentes sean más reutilizables y flexibles.

```html
<!-- ParentComponent.vue -->

<template>
  <div>
    <ChildComponent :message="message" />
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        message: "Hello, Vue!",
      };
    },
  };
</script>
```

## Eventos

Los eventos son una forma de comunicación entre componentes en Vue. Puedes emitir eventos desde un componente hijo y escuchar esos eventos en un componente padre para intercambiar datos y enviar mensajes entre los componentes.

```html
<!-- ChildComponent.vue -->

<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendMessage() {
        this.$emit("message", "Hello, Parent!");
      },
    },
  };
</script>

<!-- ParentComponent.vue -->

<template>
  <div>
    <ChildComponent @message="receiveMessage" />
    <p>{{ receivedMessage }}</p>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        receivedMessage: "",
      };
    },
    methods: {
      receiveMessage(message) {
        this.receivedMessage = message;
      },
    },
  };
</script>
```

## Tipos de Eventos

### Eventos Personalizados

Los eventos personalizados son eventos definidos por el usuario que se pueden emitir y escuchar en componentes de Vue. Puedes emitir eventos personalizados desde un componente hijo y escuchar esos eventos en un componente padre para intercambiar datos y enviar mensajes entre los componentes.

```html
<!-- ChildComponent.vue -->

<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendMessage() {
        this.$emit("message", "Hello, Parent!");
      },
    },
  };
</script>

<!-- ParentComponent.vue -->

<template>
  <div>
    <ChildComponent @message="receiveMessage" />
    <p>{{ receivedMessage }}</p>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        receivedMessage: "",
      };
    },
    methods: {
      receiveMessage(message) {
        this.receivedMessage = message;
      },
    },
  };
</script>
```

### Eventos Nativos

Los eventos nativos son eventos del navegador que se pueden escuchar en elementos HTML en las plantillas de Vue. Puedes usar la directiva `v-on` para escuchar eventos nativos como clics, cambios, entradas y más.

```html
<template>
  <div>
    <button @click="increment">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count++;
      },
    },
  };
</script>
```

## Component Events

Los eventos de componente son eventos que se pueden emitir y escuchar en componentes de Vue. Puedes emitir eventos de componente desde un componente hijo y escuchar esos eventos en un componente padre para intercambiar datos y enviar mensajes entre los componentes.

```html
<!-- ChildComponent.vue -->

<template>
  <div>
    <button @click="sendMessage">Send Message</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendMessage() {
        this.$emit("message", "Hello, Parent!");
      },
    },
  };
</script>

<!-- ParentComponent.vue -->

<template>
  <div>
    <ChildComponent @message="receiveMessage" />
    <p>{{ receivedMessage }}</p>
  </div>
</template>

<script>
  import ChildComponent from "./ChildComponent.vue";

  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        receivedMessage: "",
      };
    },
    methods: {
      receiveMessage(message) {
        this.receivedMessage = message;
      },
    },
  };
</script>
```

## Recomenzaciones de Vue para los eventos de componentes

1. Utiliza eventos personalizados para comunicarte entre componentes.
2. Utilizar CamelCase("agregarCarrito") solo para el nombre del evento pero para el identificardor del evento utilizar kebab-case(agregar-carrito).
3. El padre es el que escucha el evento y el hijo es el que emite el evento. Ejemplo: el padre escucha el evento "agregar-carrito" y el hijo emite el evento "agregar-carrito".

```html
<Hijo @agregar-carrito="agregarCarrito"></Hijo>
```

```html
<button @click="$emit('agregar-carrito', producto)">Agregar al carrito</button>
```

4. El hijo tiene que registrar el evento que va a emitir en su script.

```script
emits: ['agregar-carrito']
```

5. El padre tiene que registrar el evento que va a escuchar en su script.

```script
  const agregarCarrito = (producto) => {
    carrito.value.push(producto);
  };
```

## ¿Qué es la interpolación de texto?

La interpolación de texto es una característica de Vue que te permite insertar valores de datos en el contenido de un elemento HTML. Puedes usar la sintaxis de doble llave `{{ }}` para interpolar valores de datos en las plantillas de Vue.

```
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
```

## ¿Qué son las directivas?

Las directivas son atributos especiales que se pueden agregar a elementos HTML en las plantillas de Vue para aplicar comportamientos dinámicos. Las directivas de Vue comienzan con el prefijo `v-` y se utilizan para enlazar datos, mostrar u ocultar elementos, escuchar eventos y más.

```
<template>
  <div>
    <p v-if="showMessage">{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!',
      showMessage: true
    }
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage
    }
  }
}

</script>

```

## ¿Qué es la reactividad en Vue?

La reactividad en Vue se refiere a la capacidad de los componentes de Vue de reaccionar automáticamente a los cambios en los datos y actualizar la interfaz de usuario de manera eficiente. Cuando los datos de un componente cambian, Vue detecta automáticamente esos cambios y actualiza la interfaz de usuario para reflejar los nuevos datos.

```
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Goodbye, Vue!'
    }
  }
}
</script>
```

## ¿Qué es un componente en Vue?

Un componente en Vue es una instancia de Vue que encapsula la funcionalidad y la apariencia de una parte de la interfaz de usuario. Los componentes de Vue se pueden reutilizar en diferentes partes de una aplicación y se pueden anidar para construir interfaces de usuario complejas.

```
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>
```

## ¿Qué es la comunicación entre componentes en Vue?

La comunicación entre componentes en Vue se refiere a la forma en que los componentes de Vue pueden intercambiar datos y enviar mensajes entre sí. Hay varias formas de comunicación entre componentes en Vue, como props, eventos, slots, servicios y el patrón de bus de eventos.

```

// ParentComponent.vue
<template>
  <div>
    <ChildComponent :message="message" @updateMessage="updateMessage" />
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    updateMessage(newMessage) {
      this.message = newMessage
    }
  }
}
</script>

// ChildComponent.vue

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>

export default {
  props: ['message'],
  methods: {
    changeMessage() {
      this.$emit('updateMessage', 'Goodbye, Vue!')
    }
  }
}

</script>

```

## ¿Qué es Vuex?

Vuex es un patrón de gestión de estado y una biblioteca para aplicaciones Vue que proporciona un almacén centralizado para todos los datos de la aplicación y las reglas para cambiar esos datos de manera predecible. Vuex se basa en el patrón de diseño de arquitectura Flux y se utiliza para manejar el estado compartido entre componentes en una aplicación Vue.

```
// store/index.js

import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

```
