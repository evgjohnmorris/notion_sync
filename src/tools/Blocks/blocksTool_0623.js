/**
 * Generated Tool: blocksTool_0623
 * Domain: Blocks
 * ID: 0623
 */
exports.blocksTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0623:', error);
    throw error;
  }
};
