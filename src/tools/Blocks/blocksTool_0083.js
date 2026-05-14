/**
 * Generated Tool: blocksTool_0083
 * Domain: Blocks
 * ID: 0083
 */
exports.blocksTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0083:', error);
    throw error;
  }
};
