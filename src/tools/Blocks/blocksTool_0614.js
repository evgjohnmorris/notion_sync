/**
 * Generated Tool: blocksTool_0614
 * Domain: Blocks
 * ID: 0614
 */
exports.blocksTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0614:', error);
    throw error;
  }
};
