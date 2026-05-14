/**
 * Generated Tool: blocksTool_0093
 * Domain: Blocks
 * ID: 0093
 */
exports.blocksTool_0093 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0093:', error);
    throw error;
  }
};
