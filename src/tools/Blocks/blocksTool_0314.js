/**
 * Generated Tool: blocksTool_0314
 * Domain: Blocks
 * ID: 0314
 */
exports.blocksTool_0314 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0314:', error);
    throw error;
  }
};
