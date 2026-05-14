/**
 * Generated Tool: blocksTool_0058
 * Domain: Blocks
 * ID: 0058
 */
exports.blocksTool_0058 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0058:', error);
    throw error;
  }
};
