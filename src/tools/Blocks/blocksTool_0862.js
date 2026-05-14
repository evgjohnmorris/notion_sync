/**
 * Generated Tool: blocksTool_0862
 * Domain: Blocks
 * ID: 0862
 */
exports.blocksTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0862:', error);
    throw error;
  }
};
