/**
 * Generated Tool: blocksTool_0836
 * Domain: Blocks
 * ID: 0836
 */
exports.blocksTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0836:', error);
    throw error;
  }
};
