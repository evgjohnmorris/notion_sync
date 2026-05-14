/**
 * Generated Tool: blocksTool_0744
 * Domain: Blocks
 * ID: 0744
 */
exports.blocksTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0744:', error);
    throw error;
  }
};
