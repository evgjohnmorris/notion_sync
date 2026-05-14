/**
 * Generated Tool: blocksTool_0979
 * Domain: Blocks
 * ID: 0979
 */
exports.blocksTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0979:', error);
    throw error;
  }
};
