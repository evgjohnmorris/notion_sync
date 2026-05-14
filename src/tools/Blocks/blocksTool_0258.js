/**
 * Generated Tool: blocksTool_0258
 * Domain: Blocks
 * ID: 0258
 */
exports.blocksTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0258:', error);
    throw error;
  }
};
