/**
 * Generated Tool: blocksTool_0389
 * Domain: Blocks
 * ID: 0389
 */
exports.blocksTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0389:', error);
    throw error;
  }
};
