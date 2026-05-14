/**
 * Generated Tool: blocksTool_0529
 * Domain: Blocks
 * ID: 0529
 */
exports.blocksTool_0529 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0529:', error);
    throw error;
  }
};
