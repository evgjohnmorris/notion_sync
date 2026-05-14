/**
 * Generated Tool: blocksTool_0909
 * Domain: Blocks
 * ID: 0909
 */
exports.blocksTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0909:', error);
    throw error;
  }
};
