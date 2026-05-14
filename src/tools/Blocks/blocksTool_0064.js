/**
 * Generated Tool: blocksTool_0064
 * Domain: Blocks
 * ID: 0064
 */
exports.blocksTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0064:', error);
    throw error;
  }
};
