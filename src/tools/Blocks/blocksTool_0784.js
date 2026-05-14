/**
 * Generated Tool: blocksTool_0784
 * Domain: Blocks
 * ID: 0784
 */
exports.blocksTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0784:', error);
    throw error;
  }
};
