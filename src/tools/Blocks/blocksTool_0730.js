/**
 * Generated Tool: blocksTool_0730
 * Domain: Blocks
 * ID: 0730
 */
exports.blocksTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0730:', error);
    throw error;
  }
};
