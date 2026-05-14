/**
 * Generated Tool: blocksTool_0379
 * Domain: Blocks
 * ID: 0379
 */
exports.blocksTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0379:', error);
    throw error;
  }
};
