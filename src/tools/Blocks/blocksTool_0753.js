/**
 * Generated Tool: blocksTool_0753
 * Domain: Blocks
 * ID: 0753
 */
exports.blocksTool_0753 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0753:', error);
    throw error;
  }
};
