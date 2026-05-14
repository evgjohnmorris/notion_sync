/**
 * Generated Tool: blocksTool_0939
 * Domain: Blocks
 * ID: 0939
 */
exports.blocksTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0939:', error);
    throw error;
  }
};
