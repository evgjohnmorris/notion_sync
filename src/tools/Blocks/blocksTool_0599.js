/**
 * Generated Tool: blocksTool_0599
 * Domain: Blocks
 * ID: 0599
 */
exports.blocksTool_0599 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0599:', error);
    throw error;
  }
};
