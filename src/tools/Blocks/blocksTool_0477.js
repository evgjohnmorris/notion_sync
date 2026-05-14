/**
 * Generated Tool: blocksTool_0477
 * Domain: Blocks
 * ID: 0477
 */
exports.blocksTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0477:', error);
    throw error;
  }
};
