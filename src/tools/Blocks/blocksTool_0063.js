/**
 * Generated Tool: blocksTool_0063
 * Domain: Blocks
 * ID: 0063
 */
exports.blocksTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0063:', error);
    throw error;
  }
};
