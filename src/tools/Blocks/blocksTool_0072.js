/**
 * Generated Tool: blocksTool_0072
 * Domain: Blocks
 * ID: 0072
 */
exports.blocksTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0072:', error);
    throw error;
  }
};
