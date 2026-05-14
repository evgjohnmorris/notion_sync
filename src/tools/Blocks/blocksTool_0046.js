/**
 * Generated Tool: blocksTool_0046
 * Domain: Blocks
 * ID: 0046
 */
exports.blocksTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0046:', error);
    throw error;
  }
};
