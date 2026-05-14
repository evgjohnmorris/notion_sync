/**
 * Generated Tool: blocksTool_0237
 * Domain: Blocks
 * ID: 0237
 */
exports.blocksTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0237:', error);
    throw error;
  }
};
