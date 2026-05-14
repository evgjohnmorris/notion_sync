/**
 * Generated Tool: blocksTool_0930
 * Domain: Blocks
 * ID: 0930
 */
exports.blocksTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0930:', error);
    throw error;
  }
};
