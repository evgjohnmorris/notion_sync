/**
 * Generated Tool: blocksTool_0298
 * Domain: Blocks
 * ID: 0298
 */
exports.blocksTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0298:', error);
    throw error;
  }
};
