const textSwitchPlugin = {
  id: "textswitch",
  label: "Text Switch",  
  fromBlock: match => match && {
    defaultText: match[1],
    alternateText: match[2],
    randomId: Math.floor(Math.random() * 1000)
  },
  toBlock: data => `{{< textswitch {${ data.defaultText }} {${ data.alternateText }} >}}`,
  toPreview: data => `
    <span id="default${ data.randomId }" onclick="document.getElementById('alternate${ data.randomId }').style.display='inline'; document.getElementById('default${ data.randomId }').style.display='none';">${ data.defaultText }</span>
    <span id="alternate${ data.randomId }" style="display: none" onclick="document.getElementById('default${ data.randomId }').style.display='inline'; document.getElementById('alternate${ data.randomId }').style.display='none';">${ data.alternateText }</span>
  `,
  pattern: /^{{<\s?textswitch {(\S+)} {(\S+)}\s?>}}/,
  fields: [
    {name: 'defaultText', label: 'Default Text'},
    {name: 'alternateText', label: 'Alternate Text'}
  ]
};

export default textSwitchPlugin;
