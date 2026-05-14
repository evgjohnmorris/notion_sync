/**
 * Generated Tool: blocksTool_0926
 * Domain: Blocks
 * ID: 0926
 */
exports.blocksTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0926:', error);
    throw error;
  }
};
