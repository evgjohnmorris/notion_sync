/**
 * Generated Tool: blocksTool_0288
 * Domain: Blocks
 * ID: 0288
 */
exports.blocksTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0288:', error);
    throw error;
  }
};
