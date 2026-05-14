/**
 * Generated Tool: blocksTool_0102
 * Domain: Blocks
 * ID: 0102
 */
exports.blocksTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0102:', error);
    throw error;
  }
};
