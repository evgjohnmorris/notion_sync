/**
 * Generated Tool: blocksTool_0511
 * Domain: Blocks
 * ID: 0511
 */
exports.blocksTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0511:', error);
    throw error;
  }
};
