/**
 * Generated Tool: blocksTool_0860
 * Domain: Blocks
 * ID: 0860
 */
exports.blocksTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0860:', error);
    throw error;
  }
};
