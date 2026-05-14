/**
 * Generated Tool: blocksTool_0295
 * Domain: Blocks
 * ID: 0295
 */
exports.blocksTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0295:', error);
    throw error;
  }
};
