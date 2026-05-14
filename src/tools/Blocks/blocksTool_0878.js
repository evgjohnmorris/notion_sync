/**
 * Generated Tool: blocksTool_0878
 * Domain: Blocks
 * ID: 0878
 */
exports.blocksTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0878:', error);
    throw error;
  }
};
