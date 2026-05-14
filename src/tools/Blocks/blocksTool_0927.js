/**
 * Generated Tool: blocksTool_0927
 * Domain: Blocks
 * ID: 0927
 */
exports.blocksTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0927:', error);
    throw error;
  }
};
