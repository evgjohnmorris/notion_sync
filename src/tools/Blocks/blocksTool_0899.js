/**
 * Generated Tool: blocksTool_0899
 * Domain: Blocks
 * ID: 0899
 */
exports.blocksTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0899:', error);
    throw error;
  }
};
