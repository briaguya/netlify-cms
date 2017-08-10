const imagePlugin = {
  label: 'Image',
  id: 'image',
  fromBlock: match => match && {
    image: match[2],
    alt: match[1],
  },
  toBlock: data => `![${ data.alt }](${ data.image })`,
  toPreview: data => <img src={data.image} alt={data.alt} />,
  pattern: /^!\[([^\]]+)]\(([^)]+)\)$/,
  fields: [{
    label: 'Image',
    name: 'image',
    widget: 'image',
  }, {
    label: 'Alt Text',
    name: 'alt',
  }]
};

export default imagePlugin;
