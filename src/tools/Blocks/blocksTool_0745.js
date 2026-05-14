/**
 * Generated Tool: blocksTool_0745
 * Domain: Blocks
 * ID: 0745
 */
exports.blocksTool_0745 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0745:', error);
    throw error;
  }
};
