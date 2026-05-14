/**
 * Generated Tool: blocksTool_0720
 * Domain: Blocks
 * ID: 0720
 */
exports.blocksTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0720:', error);
    throw error;
  }
};
