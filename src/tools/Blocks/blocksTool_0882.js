/**
 * Generated Tool: blocksTool_0882
 * Domain: Blocks
 * ID: 0882
 */
exports.blocksTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0882:', error);
    throw error;
  }
};
