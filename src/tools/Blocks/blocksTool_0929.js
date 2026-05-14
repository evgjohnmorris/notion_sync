/**
 * Generated Tool: blocksTool_0929
 * Domain: Blocks
 * ID: 0929
 */
exports.blocksTool_0929 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0929:', error);
    throw error;
  }
};
