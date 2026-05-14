/**
 * Generated Tool: blocksTool_0791
 * Domain: Blocks
 * ID: 0791
 */
exports.blocksTool_0791 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0791:', error);
    throw error;
  }
};
