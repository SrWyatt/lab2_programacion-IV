# Segundo Laboratorio

**Nombre:** Josué Esaú Batres Guardado  
**Código:** SMSS058820  
**Actividad:** Segundo Laboratorio  

---

## a) Tabla de Selectores Utilizados

| Tipo de selector | Elemento afectado | Descripción de la tarea que realiza el elemento |
|------------------|------------------|-------------------------------------------------|
| getElementById | Párrafo y contador | Cambia el texto del párrafo y actualiza el valor del contador |
| getElementsByClassName | Elementos con clase "caja" | Modifica el color de fondo de varios elementos |
| getElementsByTagName | Elementos `<p>` | Oculta todos los párrafos de la página |
| querySelector | `<span>` dentro de un div | Modifica el contenido del primer elemento que coincide con el selector |
| querySelectorAll | Elementos con clase "item" | Agrega una clase para resaltar varios elementos al mismo tiempo |

---

## b) Preguntas

### ¿Cuál es la ventaja de utilizar getElementById frente al querySelector?

La ventaja principal de **getElementById** es que es más directo y eficiente cuando se necesita seleccionar un elemento por su identificador único. Este método está optimizado específicamente para buscar por id, lo que lo hace más rápido cuando solo se requiere un elemento específico.

Por otro lado, **querySelector** es más flexible porque permite utilizar cualquier selector CSS, pero debe analizar el selector antes de devolver el elemento, lo que puede hacerlo ligeramente menos eficiente en comparación con getElementById cuando solo se necesita un id.

---

### ¿En qué situación es preferible usar querySelectorAll en lugar de querySelector? Explique qué tipo de dato devuelve cada uno.

Es preferible usar **querySelectorAll** cuando se necesitan seleccionar varios elementos que coincidan con un mismo selector, por ejemplo todos los elementos que compartan una misma clase.

- **querySelector** devuelve únicamente el primer elemento que coincide con el selector y retorna un objeto de tipo *Element* o *null* si no encuentra ninguno.
- **querySelectorAll** devuelve una *NodeList*, que es una colección de elementos que puede recorrerse utilizando ciclos como `for` o el método `forEach`.

En resumen, querySelector se utiliza para obtener un solo elemento, mientras que querySelectorAll se utiliza cuando se necesita trabajar con múltiples elementos.
