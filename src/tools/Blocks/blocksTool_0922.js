/**
 * Generated Tool: blocksTool_0922
 * Domain: Blocks
 * ID: 0922
 */
exports.blocksTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0922:', error);
    throw error;
  }
};
