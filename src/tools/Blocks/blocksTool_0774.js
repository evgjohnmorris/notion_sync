/**
 * Generated Tool: blocksTool_0774
 * Domain: Blocks
 * ID: 0774
 */
exports.blocksTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0774:', error);
    throw error;
  }
};
