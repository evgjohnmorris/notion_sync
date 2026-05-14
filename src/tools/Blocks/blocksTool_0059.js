/**
 * Generated Tool: blocksTool_0059
 * Domain: Blocks
 * ID: 0059
 */
exports.blocksTool_0059 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0059:', error);
    throw error;
  }
};
