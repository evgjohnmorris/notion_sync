/**
 * Generated Tool: blocksTool_0838
 * Domain: Blocks
 * ID: 0838
 */
exports.blocksTool_0838 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0838:', error);
    throw error;
  }
};
