/**
 * Generated Tool: blocksTool_0053
 * Domain: Blocks
 * ID: 0053
 */
exports.blocksTool_0053 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0053:', error);
    throw error;
  }
};
