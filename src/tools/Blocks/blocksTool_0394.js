/**
 * Generated Tool: blocksTool_0394
 * Domain: Blocks
 * ID: 0394
 */
exports.blocksTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0394:', error);
    throw error;
  }
};
