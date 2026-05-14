/**
 * Generated Tool: blocksTool_0879
 * Domain: Blocks
 * ID: 0879
 */
exports.blocksTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0879:', error);
    throw error;
  }
};
