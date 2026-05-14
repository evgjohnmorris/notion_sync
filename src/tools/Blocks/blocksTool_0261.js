/**
 * Generated Tool: blocksTool_0261
 * Domain: Blocks
 * ID: 0261
 */
exports.blocksTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0261:', error);
    throw error;
  }
};
