/**
 * Generated Tool: blocksTool_0808
 * Domain: Blocks
 * ID: 0808
 */
exports.blocksTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0808:', error);
    throw error;
  }
};
