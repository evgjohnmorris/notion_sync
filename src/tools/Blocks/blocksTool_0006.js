/**
 * Generated Tool: blocksTool_0006
 * Domain: Blocks
 * ID: 0006
 */
exports.blocksTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0006:', error);
    throw error;
  }
};
