/**
 * Generated Tool: blocksTool_0522
 * Domain: Blocks
 * ID: 0522
 */
exports.blocksTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0522:', error);
    throw error;
  }
};
