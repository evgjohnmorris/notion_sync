/**
 * Generated Tool: blocksTool_0032
 * Domain: Blocks
 * ID: 0032
 */
exports.blocksTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0032:', error);
    throw error;
  }
};
