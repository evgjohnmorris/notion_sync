/**
 * Generated Tool: blocksTool_0721
 * Domain: Blocks
 * ID: 0721
 */
exports.blocksTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0721:', error);
    throw error;
  }
};
