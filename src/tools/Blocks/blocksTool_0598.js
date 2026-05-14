/**
 * Generated Tool: blocksTool_0598
 * Domain: Blocks
 * ID: 0598
 */
exports.blocksTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0598:', error);
    throw error;
  }
};
