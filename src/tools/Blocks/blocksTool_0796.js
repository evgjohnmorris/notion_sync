/**
 * Generated Tool: blocksTool_0796
 * Domain: Blocks
 * ID: 0796
 */
exports.blocksTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0796:', error);
    throw error;
  }
};
