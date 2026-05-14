/**
 * Generated Tool: blocksTool_0492
 * Domain: Blocks
 * ID: 0492
 */
exports.blocksTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0492:', error);
    throw error;
  }
};
