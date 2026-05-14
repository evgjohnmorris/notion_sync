/**
 * Generated Tool: blocksTool_0410
 * Domain: Blocks
 * ID: 0410
 */
exports.blocksTool_0410 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0410:', error);
    throw error;
  }
};
