/**
 * Generated Tool: blocksTool_0997
 * Domain: Blocks
 * ID: 0997
 */
exports.blocksTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0997:', error);
    throw error;
  }
};
