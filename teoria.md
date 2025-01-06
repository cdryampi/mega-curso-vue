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
