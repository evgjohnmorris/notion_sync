/**
 * Generated Tool: blocksTool_0830
 * Domain: Blocks
 * ID: 0830
 */
exports.blocksTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0830:', error);
    throw error;
  }
};
