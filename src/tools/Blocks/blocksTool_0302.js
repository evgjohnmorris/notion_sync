/**
 * Generated Tool: blocksTool_0302
 * Domain: Blocks
 * ID: 0302
 */
exports.blocksTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0302:', error);
    throw error;
  }
};
