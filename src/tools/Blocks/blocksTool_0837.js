/**
 * Generated Tool: blocksTool_0837
 * Domain: Blocks
 * ID: 0837
 */
exports.blocksTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0837:', error);
    throw error;
  }
};
