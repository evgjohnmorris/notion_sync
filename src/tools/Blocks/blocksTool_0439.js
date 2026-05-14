/**
 * Generated Tool: blocksTool_0439
 * Domain: Blocks
 * ID: 0439
 */
exports.blocksTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0439:', error);
    throw error;
  }
};
