/**
 * Generated Tool: blocksTool_0593
 * Domain: Blocks
 * ID: 0593
 */
exports.blocksTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0593:', error);
    throw error;
  }
};
