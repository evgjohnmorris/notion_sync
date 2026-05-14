/**
 * Generated Tool: blocksTool_0231
 * Domain: Blocks
 * ID: 0231
 */
exports.blocksTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0231:', error);
    throw error;
  }
};
