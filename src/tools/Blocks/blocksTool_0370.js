/**
 * Generated Tool: blocksTool_0370
 * Domain: Blocks
 * ID: 0370
 */
exports.blocksTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0370:', error);
    throw error;
  }
};
