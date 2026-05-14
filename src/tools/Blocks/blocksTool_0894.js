/**
 * Generated Tool: blocksTool_0894
 * Domain: Blocks
 * ID: 0894
 */
exports.blocksTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0894:', error);
    throw error;
  }
};
