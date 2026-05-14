/**
 * Generated Tool: blocksTool_0749
 * Domain: Blocks
 * ID: 0749
 */
exports.blocksTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0749:', error);
    throw error;
  }
};
