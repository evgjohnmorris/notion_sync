/**
 * Generated Tool: blocksTool_0192
 * Domain: Blocks
 * ID: 0192
 */
exports.blocksTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0192:', error);
    throw error;
  }
};
