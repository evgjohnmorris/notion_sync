/**
 * Generated Tool: blocksTool_0925
 * Domain: Blocks
 * ID: 0925
 */
exports.blocksTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0925:', error);
    throw error;
  }
};
