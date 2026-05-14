/**
 * Generated Tool: blocksTool_0800
 * Domain: Blocks
 * ID: 0800
 */
exports.blocksTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0800:', error);
    throw error;
  }
};
