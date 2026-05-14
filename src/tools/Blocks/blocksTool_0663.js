/**
 * Generated Tool: blocksTool_0663
 * Domain: Blocks
 * ID: 0663
 */
exports.blocksTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0663:', error);
    throw error;
  }
};
