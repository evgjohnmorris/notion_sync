/**
 * Generated Tool: blocksTool_0054
 * Domain: Blocks
 * ID: 0054
 */
exports.blocksTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0054:', error);
    throw error;
  }
};
