/**
 * Generated Tool: blocksTool_0280
 * Domain: Blocks
 * ID: 0280
 */
exports.blocksTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0280:', error);
    throw error;
  }
};
