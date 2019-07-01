const codeExtra = require('remark-code-extra');

let transformer = null;

module.exports = ({ markdownAST }, options) => {
  if (!transformer || transformer.options !== options) {
    try {
      transformer = {
        transformer: codeExtra(options),
        options
      };
    } catch(e) {
      throw new Error('Invalid options passed to plugin gatsby-remark-code-extra: ' + e.toString());
    }
  }

  return transformer.transformer(markdownAST);
}
