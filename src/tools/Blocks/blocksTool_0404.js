/**
 * Generated Tool: blocksTool_0404
 * Domain: Blocks
 * ID: 0404
 */
exports.blocksTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0404:', error);
    throw error;
  }
};
