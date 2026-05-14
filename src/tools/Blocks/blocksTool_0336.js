/**
 * Generated Tool: blocksTool_0336
 * Domain: Blocks
 * ID: 0336
 */
exports.blocksTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0336:', error);
    throw error;
  }
};
