/**
 * Generated Tool: blocksTool_0012
 * Domain: Blocks
 * ID: 0012
 */
exports.blocksTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0012:', error);
    throw error;
  }
};
