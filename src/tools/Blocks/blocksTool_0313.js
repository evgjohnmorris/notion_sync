/**
 * Generated Tool: blocksTool_0313
 * Domain: Blocks
 * ID: 0313
 */
exports.blocksTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0313:', error);
    throw error;
  }
};
