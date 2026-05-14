/**
 * Generated Tool: blocksTool_0525
 * Domain: Blocks
 * ID: 0525
 */
exports.blocksTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0525:', error);
    throw error;
  }
};
