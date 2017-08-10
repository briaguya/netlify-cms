const textSwitchPlugin = {
  id: "textswitch",
  label: "Text Switch",  
  fromBlock: match => match && {
    defaultText: match[1],
    alternateText: match[2]
  },
  toBlock: data => `{{< textswitch {${ data.defaultText }} {${ data.alternateText }} >}}`,
  toPreview: data => `
    <span id="default">${ data.defaultText }</span>
    <span id="alternate" style="visibility: hidden">${ data.alternateText }</span>
  `,
  pattern: /^{{<\s?textswitch {(\S+)} {(\S+)}\s?>}}/,
  fields: [
    {name: 'defaultText', label: 'Default Text'},
    {name: 'alternateText', label: 'Alternate Text'}
  ]
};

export default textSwitchPlugin;
