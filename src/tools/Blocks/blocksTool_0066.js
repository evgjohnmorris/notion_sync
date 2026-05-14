/**
 * Generated Tool: blocksTool_0066
 * Domain: Blocks
 * ID: 0066
 */
exports.blocksTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0066:', error);
    throw error;
  }
};
