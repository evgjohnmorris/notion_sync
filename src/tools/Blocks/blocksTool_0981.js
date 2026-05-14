/**
 * Generated Tool: blocksTool_0981
 * Domain: Blocks
 * ID: 0981
 */
exports.blocksTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0981:', error);
    throw error;
  }
};
