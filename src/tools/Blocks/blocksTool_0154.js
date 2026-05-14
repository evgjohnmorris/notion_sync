/**
 * Generated Tool: blocksTool_0154
 * Domain: Blocks
 * ID: 0154
 */
exports.blocksTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0154:', error);
    throw error;
  }
};
