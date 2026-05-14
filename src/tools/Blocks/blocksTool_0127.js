/**
 * Generated Tool: blocksTool_0127
 * Domain: Blocks
 * ID: 0127
 */
exports.blocksTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0127:', error);
    throw error;
  }
};
