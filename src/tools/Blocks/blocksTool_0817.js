/**
 * Generated Tool: blocksTool_0817
 * Domain: Blocks
 * ID: 0817
 */
exports.blocksTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0817:', error);
    throw error;
  }
};
