/**
 * Generated Tool: blocksTool_0590
 * Domain: Blocks
 * ID: 0590
 */
exports.blocksTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0590:', error);
    throw error;
  }
};
