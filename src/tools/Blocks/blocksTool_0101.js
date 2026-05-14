/**
 * Generated Tool: blocksTool_0101
 * Domain: Blocks
 * ID: 0101
 */
exports.blocksTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0101:', error);
    throw error;
  }
};
