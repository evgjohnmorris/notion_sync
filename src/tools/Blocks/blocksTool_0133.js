/**
 * Generated Tool: blocksTool_0133
 * Domain: Blocks
 * ID: 0133
 */
exports.blocksTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0133:', error);
    throw error;
  }
};
