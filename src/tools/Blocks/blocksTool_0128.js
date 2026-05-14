/**
 * Generated Tool: blocksTool_0128
 * Domain: Blocks
 * ID: 0128
 */
exports.blocksTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0128:', error);
    throw error;
  }
};
