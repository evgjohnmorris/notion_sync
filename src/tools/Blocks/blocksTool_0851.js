/**
 * Generated Tool: blocksTool_0851
 * Domain: Blocks
 * ID: 0851
 */
exports.blocksTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0851:', error);
    throw error;
  }
};
