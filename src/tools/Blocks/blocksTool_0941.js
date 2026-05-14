/**
 * Generated Tool: blocksTool_0941
 * Domain: Blocks
 * ID: 0941
 */
exports.blocksTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0941:', error);
    throw error;
  }
};
