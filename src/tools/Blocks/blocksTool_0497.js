/**
 * Generated Tool: blocksTool_0497
 * Domain: Blocks
 * ID: 0497
 */
exports.blocksTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0497:', error);
    throw error;
  }
};
