/**
 * Generated Tool: blocksTool_0308
 * Domain: Blocks
 * ID: 0308
 */
exports.blocksTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0308:', error);
    throw error;
  }
};
