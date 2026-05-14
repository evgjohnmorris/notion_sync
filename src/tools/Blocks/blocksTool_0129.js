/**
 * Generated Tool: blocksTool_0129
 * Domain: Blocks
 * ID: 0129
 */
exports.blocksTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0129:', error);
    throw error;
  }
};
