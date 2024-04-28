/**
 * Return formatted text from node.body.  Throw error if not found.
 */
export function getFormattedNodeBody(node: any) {
  //
  if (node.type === 'FormattedText') {
    return node.body;
  }

  throw new Error(`Unknown node type: ${node?.type}`);
}
