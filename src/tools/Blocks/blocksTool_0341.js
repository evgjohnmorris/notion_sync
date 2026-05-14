/**
 * Generated Tool: blocksTool_0341
 * Domain: Blocks
 * ID: 0341
 */
exports.blocksTool_0341 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0341:', error);
    throw error;
  }
};
