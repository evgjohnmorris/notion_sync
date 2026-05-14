/**
 * Generated Tool: blocksTool_0627
 * Domain: Blocks
 * ID: 0627
 */
exports.blocksTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0627:', error);
    throw error;
  }
};
