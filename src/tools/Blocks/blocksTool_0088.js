/**
 * Generated Tool: blocksTool_0088
 * Domain: Blocks
 * ID: 0088
 */
exports.blocksTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0088:', error);
    throw error;
  }
};
