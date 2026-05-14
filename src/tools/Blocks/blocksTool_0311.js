/**
 * Generated Tool: blocksTool_0311
 * Domain: Blocks
 * ID: 0311
 */
exports.blocksTool_0311 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0311:', error);
    throw error;
  }
};
