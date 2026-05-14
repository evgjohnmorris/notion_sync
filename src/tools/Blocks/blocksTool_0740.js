/**
 * Generated Tool: blocksTool_0740
 * Domain: Blocks
 * ID: 0740
 */
exports.blocksTool_0740 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0740:', error);
    throw error;
  }
};
