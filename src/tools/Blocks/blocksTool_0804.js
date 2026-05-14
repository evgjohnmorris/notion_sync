/**
 * Generated Tool: blocksTool_0804
 * Domain: Blocks
 * ID: 0804
 */
exports.blocksTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0804:', error);
    throw error;
  }
};
