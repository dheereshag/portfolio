export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'name', title: 'Job Title', type: 'string'},
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'workDescription'}],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size & Style',
      type: 'string',
    },
  ],
}
