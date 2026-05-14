/**
 * Generated Tool: blocksTool_0897
 * Domain: Blocks
 * ID: 0897
 */
exports.blocksTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0897:', error);
    throw error;
  }
};
