/**
 * Generated Tool: blocksTool_0041
 * Domain: Blocks
 * ID: 0041
 */
exports.blocksTool_0041 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0041:', error);
    throw error;
  }
};
