/**
 * Generated Tool: blocksTool_0780
 * Domain: Blocks
 * ID: 0780
 */
exports.blocksTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0780:', error);
    throw error;
  }
};
