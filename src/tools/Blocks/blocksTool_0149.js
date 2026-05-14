/**
 * Generated Tool: blocksTool_0149
 * Domain: Blocks
 * ID: 0149
 */
exports.blocksTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0149:', error);
    throw error;
  }
};
