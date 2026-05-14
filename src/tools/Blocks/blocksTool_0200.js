/**
 * Generated Tool: blocksTool_0200
 * Domain: Blocks
 * ID: 0200
 */
exports.blocksTool_0200 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0200:', error);
    throw error;
  }
};
