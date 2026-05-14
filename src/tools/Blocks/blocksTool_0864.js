/**
 * Generated Tool: blocksTool_0864
 * Domain: Blocks
 * ID: 0864
 */
exports.blocksTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0864:', error);
    throw error;
  }
};
