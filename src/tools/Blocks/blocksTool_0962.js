/**
 * Generated Tool: blocksTool_0962
 * Domain: Blocks
 * ID: 0962
 */
exports.blocksTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0962:', error);
    throw error;
  }
};
