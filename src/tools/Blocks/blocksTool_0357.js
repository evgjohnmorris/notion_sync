/**
 * Generated Tool: blocksTool_0357
 * Domain: Blocks
 * ID: 0357
 */
exports.blocksTool_0357 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0357:', error);
    throw error;
  }
};
