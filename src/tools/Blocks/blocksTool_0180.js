/**
 * Generated Tool: blocksTool_0180
 * Domain: Blocks
 * ID: 0180
 */
exports.blocksTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0180:', error);
    throw error;
  }
};
