/**
 * Generated Tool: blocksTool_0095
 * Domain: Blocks
 * ID: 0095
 */
exports.blocksTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0095:', error);
    throw error;
  }
};
