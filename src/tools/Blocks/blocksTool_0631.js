/**
 * Generated Tool: blocksTool_0631
 * Domain: Blocks
 * ID: 0631
 */
exports.blocksTool_0631 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0631:', error);
    throw error;
  }
};
