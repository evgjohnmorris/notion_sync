/**
 * Generated Tool: blocksTool_0778
 * Domain: Blocks
 * ID: 0778
 */
exports.blocksTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0778:', error);
    throw error;
  }
};
