/**
 * Generated Tool: blocksTool_0651
 * Domain: Blocks
 * ID: 0651
 */
exports.blocksTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0651:', error);
    throw error;
  }
};
