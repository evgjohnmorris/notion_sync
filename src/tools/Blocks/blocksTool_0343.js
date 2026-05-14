/**
 * Generated Tool: blocksTool_0343
 * Domain: Blocks
 * ID: 0343
 */
exports.blocksTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0343:', error);
    throw error;
  }
};
