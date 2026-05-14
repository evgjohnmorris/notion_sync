/**
 * Generated Tool: blocksTool_0500
 * Domain: Blocks
 * ID: 0500
 */
exports.blocksTool_0500 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0500:', error);
    throw error;
  }
};
