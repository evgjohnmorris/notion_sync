/**
 * Generated Tool: blocksTool_0714
 * Domain: Blocks
 * ID: 0714
 */
exports.blocksTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0714:', error);
    throw error;
  }
};
