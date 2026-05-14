/**
 * Generated Tool: blocksTool_0820
 * Domain: Blocks
 * ID: 0820
 */
exports.blocksTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0820:', error);
    throw error;
  }
};
