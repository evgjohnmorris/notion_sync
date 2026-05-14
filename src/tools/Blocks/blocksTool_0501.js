/**
 * Generated Tool: blocksTool_0501
 * Domain: Blocks
 * ID: 0501
 */
exports.blocksTool_0501 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0501:', error);
    throw error;
  }
};
