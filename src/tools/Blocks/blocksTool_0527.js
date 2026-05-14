/**
 * Generated Tool: blocksTool_0527
 * Domain: Blocks
 * ID: 0527
 */
exports.blocksTool_0527 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0527:', error);
    throw error;
  }
};
