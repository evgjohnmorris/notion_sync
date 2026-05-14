/**
 * Generated Tool: blocksTool_0729
 * Domain: Blocks
 * ID: 0729
 */
exports.blocksTool_0729 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0729:', error);
    throw error;
  }
};
