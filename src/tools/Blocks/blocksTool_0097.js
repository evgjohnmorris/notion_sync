/**
 * Generated Tool: blocksTool_0097
 * Domain: Blocks
 * ID: 0097
 */
exports.blocksTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0097:', error);
    throw error;
  }
};
