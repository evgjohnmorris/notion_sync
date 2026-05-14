/**
 * Generated Tool: blocksTool_0601
 * Domain: Blocks
 * ID: 0601
 */
exports.blocksTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0601:', error);
    throw error;
  }
};
