/**
 * Generated Tool: blocksTool_0673
 * Domain: Blocks
 * ID: 0673
 */
exports.blocksTool_0673 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0673:', error);
    throw error;
  }
};
