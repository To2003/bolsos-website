// 1. Definimos qué es una "Categoría"
const category = {
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre de la Categoría',
      type: 'string',
    }
  ]
}

// 2. Definimos el "Producto" (actualizado)
const product = {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}

// Exportamos los dos tipos
export const schemaTypes = [product, category]