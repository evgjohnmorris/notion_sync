/**
 * Generated Tool: blocksTool_0038
 * Domain: Blocks
 * ID: 0038
 */
exports.blocksTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0038:', error);
    throw error;
  }
};
