/**
 * Generated Tool: blocksTool_0120
 * Domain: Blocks
 * ID: 0120
 */
exports.blocksTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0120:', error);
    throw error;
  }
};
