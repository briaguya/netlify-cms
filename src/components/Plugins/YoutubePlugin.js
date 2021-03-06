const youtubePlugin = {
  id: "youtube",
  label: "Youtube",
  fields: [{name: 'id', label: 'Youtube Video ID'}],
  pattern: /^{{<\s?youtube (\S+)\s?>}}/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return '{{< youtube ' + obj.id + ' >}}';
  },
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
};

export default youtubePlugin;
