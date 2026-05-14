/**
 * Generated Tool: blocksTool_0513
 * Domain: Blocks
 * ID: 0513
 */
exports.blocksTool_0513 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0513:', error);
    throw error;
  }
};
