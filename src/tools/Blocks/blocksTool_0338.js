/**
 * Generated Tool: blocksTool_0338
 * Domain: Blocks
 * ID: 0338
 */
exports.blocksTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0338:', error);
    throw error;
  }
};
