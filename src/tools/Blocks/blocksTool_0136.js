/**
 * Generated Tool: blocksTool_0136
 * Domain: Blocks
 * ID: 0136
 */
exports.blocksTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0136:', error);
    throw error;
  }
};
