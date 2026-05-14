/**
 * Generated Tool: blocksTool_0958
 * Domain: Blocks
 * ID: 0958
 */
exports.blocksTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0958:', error);
    throw error;
  }
};
