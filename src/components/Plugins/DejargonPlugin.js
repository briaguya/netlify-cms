const dejargonPlugin = {
  id: "dejargon",
  label: "Dejargon",
  fromBlock: match => match && {
    jargon: match[1],
    layman: match[2],
    randomId: Math.floor(Math.random() * 1000)
  },
  toBlock: data => `{{< dejargon {${ data.jargon }} {${ data.layman }} >}}`,
  toPreview: data => `
    <span id="jargon${ data.randomId }"
     onclick="
      document.getElementById('layman${ data.randomId }').style.display='inline';
      document.getElementById('jargon${ data.randomId }').style.display='none';">
      <i>${ data.jargon }</i>
    </span>
    <span id="layman${ data.randomId }" style="display: none" 
     onclick="
      document.getElementById('jargon${ data.randomId }').style.display='inline';
      document.getElementById('layman${ data.randomId }').style.display='none';">
      <b>${ data.layman }</b>
    </span>
  `,
  pattern: /^{{<\s?dejargon {(.+)} {(.+)}\s?>}}/,
  fields: [
    {name: 'jargon', label: 'Jargon'},
    {name: 'layman', label: 'In Laymans Terms'}
  ]
};

export default dejargonPlugin;
