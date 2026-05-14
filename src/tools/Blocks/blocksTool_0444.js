/**
 * Generated Tool: blocksTool_0444
 * Domain: Blocks
 * ID: 0444
 */
exports.blocksTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0444:', error);
    throw error;
  }
};
