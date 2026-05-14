/**
 * Generated Tool: blocksTool_0875
 * Domain: Blocks
 * ID: 0875
 */
exports.blocksTool_0875 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0875:', error);
    throw error;
  }
};
