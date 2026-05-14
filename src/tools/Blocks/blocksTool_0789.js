/**
 * Generated Tool: blocksTool_0789
 * Domain: Blocks
 * ID: 0789
 */
exports.blocksTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0789:', error);
    throw error;
  }
};
