// sanity/schemaTypes/perfil.ts
export const perfil = {
  name: 'perfil',
  title: 'Estética de la Web',
  type: 'document',
  fields: [
    {
      name: 'fotoHero',
      title: 'Imagen de Portada (Hero)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'fotoSobreMi',
      title: 'Foto Principal (Sobre Mí)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imagenesInstagram', // Le cambié el nombre para que sea más claro
      title: 'Fotos para el grid de Instagram (Máximo 6)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
}