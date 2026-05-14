/**
 * Generated Tool: blocksTool_0725
 * Domain: Blocks
 * ID: 0725
 */
exports.blocksTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0725:', error);
    throw error;
  }
};
