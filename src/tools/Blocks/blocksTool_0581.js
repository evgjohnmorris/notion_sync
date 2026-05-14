/**
 * Generated Tool: blocksTool_0581
 * Domain: Blocks
 * ID: 0581
 */
exports.blocksTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0581:', error);
    throw error;
  }
};
