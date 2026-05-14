/**
 * Generated Tool: blocksTool_0660
 * Domain: Blocks
 * ID: 0660
 */
exports.blocksTool_0660 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0660:', error);
    throw error;
  }
};
