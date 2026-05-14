/**
 * Generated Tool: blocksTool_0787
 * Domain: Blocks
 * ID: 0787
 */
exports.blocksTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0787:', error);
    throw error;
  }
};
