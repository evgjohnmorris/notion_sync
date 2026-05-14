/**
 * Generated Tool: blocksTool_0763
 * Domain: Blocks
 * ID: 0763
 */
exports.blocksTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0763:', error);
    throw error;
  }
};
