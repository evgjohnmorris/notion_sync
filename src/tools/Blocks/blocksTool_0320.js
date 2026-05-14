/**
 * Generated Tool: blocksTool_0320
 * Domain: Blocks
 * ID: 0320
 */
exports.blocksTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0320:', error);
    throw error;
  }
};
