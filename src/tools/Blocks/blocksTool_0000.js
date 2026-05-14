/**
 * Generated Tool: blocksTool_0000
 * Domain: Blocks
 * ID: 0000
 */
exports.blocksTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0000:', error);
    throw error;
  }
};
