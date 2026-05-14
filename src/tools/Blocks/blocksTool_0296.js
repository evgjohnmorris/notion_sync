/**
 * Generated Tool: blocksTool_0296
 * Domain: Blocks
 * ID: 0296
 */
exports.blocksTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0296:', error);
    throw error;
  }
};
