/**
 * Generated Tool: blocksTool_0801
 * Domain: Blocks
 * ID: 0801
 */
exports.blocksTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0801:', error);
    throw error;
  }
};
