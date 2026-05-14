/**
 * Generated Tool: blocksTool_0762
 * Domain: Blocks
 * ID: 0762
 */
exports.blocksTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0762:', error);
    throw error;
  }
};
