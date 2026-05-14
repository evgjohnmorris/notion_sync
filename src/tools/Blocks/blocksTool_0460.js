/**
 * Generated Tool: blocksTool_0460
 * Domain: Blocks
 * ID: 0460
 */
exports.blocksTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0460:', error);
    throw error;
  }
};
