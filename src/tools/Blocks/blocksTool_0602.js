/**
 * Generated Tool: blocksTool_0602
 * Domain: Blocks
 * ID: 0602
 */
exports.blocksTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0602:', error);
    throw error;
  }
};
