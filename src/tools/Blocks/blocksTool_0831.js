/**
 * Generated Tool: blocksTool_0831
 * Domain: Blocks
 * ID: 0831
 */
exports.blocksTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0831:', error);
    throw error;
  }
};
