export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'orientation',
              type: 'string',
              title: 'Orientation',
              options: {
                list: [
                  {title: 'Landscape', value: 'landscape'},
                  {title: 'Portrait', value: 'portrait'},
                ],
              },
            },
            {
              name: 'credits',
              type: 'string',
              title: 'Credits',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
          initialValue: {
            orientation: 'landscape',
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'awards',
      type: 'text',
      title: 'Awards',
    },
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
      title: 'title',
    },
    prepare(selection) {
      const {image, title} = selection

      return {
        media: image,
        title: title,
      }
    },
  },
}
