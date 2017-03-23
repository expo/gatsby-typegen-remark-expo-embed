const visit = require(`unist-util-visit`);

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `image`, node => {
    if (node.alt === 'sketch') {
      const data = patch(node, `data`, {});
      const id = node.url;
      delete node.alt;
      delete node.url;
      node.children = [];

      node.type = 'div';
      patch(data, `hProperties`, {});
      patch(data.hProperties, 'data-sketch-id', id);
      patch(data.hProperties, 'data-sketch-platform', 'ios');
      patch(data.hProperties, 'data-sketch-preview', true);
      patch(data.hProperties, 'class', 'embedded-example-container');
    }
  });
};
