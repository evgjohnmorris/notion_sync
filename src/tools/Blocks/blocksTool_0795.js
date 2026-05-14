/**
 * Generated Tool: blocksTool_0795
 * Domain: Blocks
 * ID: 0795
 */
exports.blocksTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0795:', error);
    throw error;
  }
};
