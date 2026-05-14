/**
 * Generated Tool: blocksTool_0400
 * Domain: Blocks
 * ID: 0400
 */
exports.blocksTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0400:', error);
    throw error;
  }
};
