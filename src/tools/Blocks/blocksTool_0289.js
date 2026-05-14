/**
 * Generated Tool: blocksTool_0289
 * Domain: Blocks
 * ID: 0289
 */
exports.blocksTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0289:', error);
    throw error;
  }
};
