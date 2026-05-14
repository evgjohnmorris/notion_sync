/**
 * Generated Tool: blocksTool_0827
 * Domain: Blocks
 * ID: 0827
 */
exports.blocksTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0827:', error);
    throw error;
  }
};
