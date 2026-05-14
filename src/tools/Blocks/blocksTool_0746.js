/**
 * Generated Tool: blocksTool_0746
 * Domain: Blocks
 * ID: 0746
 */
exports.blocksTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0746:', error);
    throw error;
  }
};
