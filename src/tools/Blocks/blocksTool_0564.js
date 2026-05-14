/**
 * Generated Tool: blocksTool_0564
 * Domain: Blocks
 * ID: 0564
 */
exports.blocksTool_0564 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0564:', error);
    throw error;
  }
};
