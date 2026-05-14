/**
 * Generated Tool: blocksTool_0604
 * Domain: Blocks
 * ID: 0604
 */
exports.blocksTool_0604 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0604:', error);
    throw error;
  }
};
