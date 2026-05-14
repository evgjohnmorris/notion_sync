/**
 * Generated Tool: blocksTool_0989
 * Domain: Blocks
 * ID: 0989
 */
exports.blocksTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0989:', error);
    throw error;
  }
};
