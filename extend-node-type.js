var parse = require('remark-parse')
var customParser = require('@dumpster/remark-custom-element-to-hast')
var GraphQLJSON = require('graphql-type-json')
var unified = require('unified')

function parseElements(node, options){
  var parsed;
  var whitelist = options.components || [];
  var parser = unified()
    .use(parse)
    .use(customParser, {
      componentWhitelist: options.components 
    });
  try {
    parsed = parser.processSync(
        removeHeader(node.internal.content)
      ).contents;
  } catch (e) {
    console.log('An error occured during parsing:', e);
  }
  if(options.debug){
    console.log(JSON.stringify(parsed, null, 2));
  }
  return parsed;
}

// default export
module.exports = function(node, options){
  var type = node.type;
  // we only extend nodes created by gatsby-transformer-remark
  if (type.name !== `MarkdownRemark`) { return {} }
  return {
    hast: {
      type: GraphQLJSON,
      resolve(node){
        return parseElements(node, options)
      }
    }
  };
}
