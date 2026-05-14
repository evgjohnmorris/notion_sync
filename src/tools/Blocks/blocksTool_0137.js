/**
 * Generated Tool: blocksTool_0137
 * Domain: Blocks
 * ID: 0137
 */
exports.blocksTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0137:', error);
    throw error;
  }
};
