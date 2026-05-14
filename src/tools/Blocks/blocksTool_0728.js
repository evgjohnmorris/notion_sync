/**
 * Generated Tool: blocksTool_0728
 * Domain: Blocks
 * ID: 0728
 */
exports.blocksTool_0728 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0728:', error);
    throw error;
  }
};
