/**
 * Generated Tool: blocksTool_0466
 * Domain: Blocks
 * ID: 0466
 */
exports.blocksTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0466:', error);
    throw error;
  }
};
