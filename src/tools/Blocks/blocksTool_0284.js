/**
 * Generated Tool: blocksTool_0284
 * Domain: Blocks
 * ID: 0284
 */
exports.blocksTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0284:', error);
    throw error;
  }
};
