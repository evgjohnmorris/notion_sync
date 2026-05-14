/**
 * Generated Tool: blocksTool_0652
 * Domain: Blocks
 * ID: 0652
 */
exports.blocksTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0652:', error);
    throw error;
  }
};
