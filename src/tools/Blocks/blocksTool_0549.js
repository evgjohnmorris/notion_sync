/**
 * Generated Tool: blocksTool_0549
 * Domain: Blocks
 * ID: 0549
 */
exports.blocksTool_0549 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0549:', error);
    throw error;
  }
};
