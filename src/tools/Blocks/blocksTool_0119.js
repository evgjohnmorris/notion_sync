/**
 * Generated Tool: blocksTool_0119
 * Domain: Blocks
 * ID: 0119
 */
exports.blocksTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0119:', error);
    throw error;
  }
};
