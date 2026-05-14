/**
 * Generated Tool: blocksTool_0839
 * Domain: Blocks
 * ID: 0839
 */
exports.blocksTool_0839 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0839:', error);
    throw error;
  }
};
