/**
 * Generated Tool: blocksTool_0913
 * Domain: Blocks
 * ID: 0913
 */
exports.blocksTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0913:', error);
    throw error;
  }
};
