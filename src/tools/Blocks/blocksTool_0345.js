/**
 * Generated Tool: blocksTool_0345
 * Domain: Blocks
 * ID: 0345
 */
exports.blocksTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0345:', error);
    throw error;
  }
};
