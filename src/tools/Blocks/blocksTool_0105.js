/**
 * Generated Tool: blocksTool_0105
 * Domain: Blocks
 * ID: 0105
 */
exports.blocksTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0105:', error);
    throw error;
  }
};
