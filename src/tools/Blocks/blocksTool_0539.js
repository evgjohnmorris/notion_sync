/**
 * Generated Tool: blocksTool_0539
 * Domain: Blocks
 * ID: 0539
 */
exports.blocksTool_0539 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0539:', error);
    throw error;
  }
};
