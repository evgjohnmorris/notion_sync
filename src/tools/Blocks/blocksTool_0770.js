/**
 * Generated Tool: blocksTool_0770
 * Domain: Blocks
 * ID: 0770
 */
exports.blocksTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0770:', error);
    throw error;
  }
};
