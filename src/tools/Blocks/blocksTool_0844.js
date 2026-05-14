/**
 * Generated Tool: blocksTool_0844
 * Domain: Blocks
 * ID: 0844
 */
exports.blocksTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0844:', error);
    throw error;
  }
};
