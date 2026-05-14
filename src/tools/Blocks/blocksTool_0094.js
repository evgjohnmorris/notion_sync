/**
 * Generated Tool: blocksTool_0094
 * Domain: Blocks
 * ID: 0094
 */
exports.blocksTool_0094 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0094:', error);
    throw error;
  }
};
