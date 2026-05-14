/**
 * Generated Tool: blocksTool_0852
 * Domain: Blocks
 * ID: 0852
 */
exports.blocksTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0852:', error);
    throw error;
  }
};
