/**
 * Generated Tool: blocksTool_0252
 * Domain: Blocks
 * ID: 0252
 */
exports.blocksTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0252:', error);
    throw error;
  }
};
