/**
 * Generated Tool: blocksTool_0089
 * Domain: Blocks
 * ID: 0089
 */
exports.blocksTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0089:', error);
    throw error;
  }
};
