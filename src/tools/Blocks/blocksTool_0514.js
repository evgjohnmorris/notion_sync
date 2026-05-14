/**
 * Generated Tool: blocksTool_0514
 * Domain: Blocks
 * ID: 0514
 */
exports.blocksTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0514:', error);
    throw error;
  }
};
