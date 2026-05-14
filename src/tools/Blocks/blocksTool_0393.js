/**
 * Generated Tool: blocksTool_0393
 * Domain: Blocks
 * ID: 0393
 */
exports.blocksTool_0393 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0393:', error);
    throw error;
  }
};
