/**
 * Generated Tool: blocksTool_0030
 * Domain: Blocks
 * ID: 0030
 */
exports.blocksTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0030:', error);
    throw error;
  }
};
