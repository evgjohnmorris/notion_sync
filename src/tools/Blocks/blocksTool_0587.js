/**
 * Generated Tool: blocksTool_0587
 * Domain: Blocks
 * ID: 0587
 */
exports.blocksTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0587:', error);
    throw error;
  }
};
