/**
 * Generated Tool: blocksTool_0858
 * Domain: Blocks
 * ID: 0858
 */
exports.blocksTool_0858 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0858:', error);
    throw error;
  }
};
