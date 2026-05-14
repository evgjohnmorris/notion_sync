/**
 * Generated Tool: blocksTool_0761
 * Domain: Blocks
 * ID: 0761
 */
exports.blocksTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0761:', error);
    throw error;
  }
};
