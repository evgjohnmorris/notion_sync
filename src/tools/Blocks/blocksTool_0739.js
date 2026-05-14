/**
 * Generated Tool: blocksTool_0739
 * Domain: Blocks
 * ID: 0739
 */
exports.blocksTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0739:', error);
    throw error;
  }
};
