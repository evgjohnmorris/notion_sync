/**
 * Generated Tool: blocksTool_0776
 * Domain: Blocks
 * ID: 0776
 */
exports.blocksTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0776:', error);
    throw error;
  }
};
