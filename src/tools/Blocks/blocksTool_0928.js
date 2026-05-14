/**
 * Generated Tool: blocksTool_0928
 * Domain: Blocks
 * ID: 0928
 */
exports.blocksTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0928:', error);
    throw error;
  }
};
