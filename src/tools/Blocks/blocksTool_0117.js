/**
 * Generated Tool: blocksTool_0117
 * Domain: Blocks
 * ID: 0117
 */
exports.blocksTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0117:', error);
    throw error;
  }
};
