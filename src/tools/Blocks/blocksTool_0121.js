/**
 * Generated Tool: blocksTool_0121
 * Domain: Blocks
 * ID: 0121
 */
exports.blocksTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0121:', error);
    throw error;
  }
};
