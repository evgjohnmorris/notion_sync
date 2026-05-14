/**
 * Generated Tool: blocksTool_0377
 * Domain: Blocks
 * ID: 0377
 */
exports.blocksTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0377:', error);
    throw error;
  }
};
