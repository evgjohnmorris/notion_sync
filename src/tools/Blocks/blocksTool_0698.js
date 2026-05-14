/**
 * Generated Tool: blocksTool_0698
 * Domain: Blocks
 * ID: 0698
 */
exports.blocksTool_0698 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0698:', error);
    throw error;
  }
};
