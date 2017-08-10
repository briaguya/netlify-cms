const textSwitchPlugin = {
  id: "textswitch",
  label: "Text Switch",
  fields: [
    {name: 'defaultText', label: 'Default Text'},
    {name: 'alternateText', label: 'Alternate Text'}
  ],
  pattern: /^!\[([^\]]+)]\(([^)]+)\)$/,
  fromBlock: function(match) {
    return {
      defaultText: match[1],
      alternateText: match[2]
    };
  },
  toBlock: function(obj) {
    return '{{< default: ' + obj.defaultText + ', alternateText: ' + obj.alternateText + ' >}}';
  },
  toPreview: function(obj) {
    return (
      '<div>default: ' + obj.defaultText + 'alternateText: ' + obj.alternateText + ' </div>'
    );
  }
};

export default textSwitchPlugin;
