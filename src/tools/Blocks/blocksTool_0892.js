/**
 * Generated Tool: blocksTool_0892
 * Domain: Blocks
 * ID: 0892
 */
exports.blocksTool_0892 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0892:', error);
    throw error;
  }
};
