/**
 * Generated Tool: blocksTool_0589
 * Domain: Blocks
 * ID: 0589
 */
exports.blocksTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0589:', error);
    throw error;
  }
};
