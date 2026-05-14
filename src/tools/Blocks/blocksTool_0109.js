/**
 * Generated Tool: blocksTool_0109
 * Domain: Blocks
 * ID: 0109
 */
exports.blocksTool_0109 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0109:', error);
    throw error;
  }
};
