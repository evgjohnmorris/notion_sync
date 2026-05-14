/**
 * Generated Tool: blocksTool_0970
 * Domain: Blocks
 * ID: 0970
 */
exports.blocksTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0970:', error);
    throw error;
  }
};
