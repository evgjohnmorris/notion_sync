/**
 * Generated Tool: blocksTool_0194
 * Domain: Blocks
 * ID: 0194
 */
exports.blocksTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0194:', error);
    throw error;
  }
};
